const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userService = require('../services/userService');

const SECRET = 'charmander>squirtle';

const jwtConfiguration = { expiresIn: '15m', algorithm: 'HS512' };

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const validation = userService.validateUserName(displayName, password)
    || userService.validateUserEmail(email)
    || userService.validateUserPassword(password);

  if (validation) {
    return res.status(validation.status).json({ message: validation.message });
  }
  
  next();
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await User.create({ displayName, email, password, image });

  return res.status(201).json({ token: req.token });
};

const validateRepetitiveEmail = async (req, res, next) => {
  const { email } = req.body;

  const isRepetitiveEmail = await User.findOne({ where: { email } });

  if (isRepetitiveEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const createToken = (req, res, next) => {
  const { email } = req.body;

  const token = jwt.sign(
    { email },
    SECRET,
    jwtConfiguration,
  );

  req.token = token;

  next();
};

const validateCredentials = async (req, res, next) => {
  const { email, password } = req.body;

  const validationCredentials = userService.validateEmptyCredentials(email, password)
    || userService.validateLoginCredentials(email, password);

  if (validationCredentials) {
    return res.status(validationCredentials.status).json({
      message: validationCredentials.message,
    });
  }

  const isCredentialsValid = await User.findOne({ where: { email } });

  if (!isCredentialsValid || isCredentialsValid.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const login = async (req, res) => res.status(200).json({ token: req.token });

const listAllUsers = async (req, res) => {
  const allUsersData = await User.findAll({ attributes: { exclude: ['password'] } });

  return res.status(200).json(allUsersData);
};

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  const validation = await userService.validateJWT(token);

  if (validation.message) {
    return res.status(validation.status).json({ message: validation.message });
  }
  
  req.decryptedData = validation.email;
  next();
};

const listById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  const isUser = await User.findOne({ where: { id } });

  if (!isUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(isUser);
};

module.exports = {
  validateUser,
  createToken,
  validateRepetitiveEmail,
  createUser,
  validateCredentials,
  login,
  listAllUsers,
  validateJWT,
  listById,
};