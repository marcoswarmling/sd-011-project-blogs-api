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

  if (validation.message) {
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

  const existUser = await User.findOne({ where: { email } });

  if (existUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const tokenCreate = (req, res, next) => {
  const { email } = req.body;

  const token = jwt.sign(
    { email },
    SECRET,
    jwtConfiguration,
  );

  req.token = token;

  next();
};

module.exports = {
  validateUser,
  tokenCreate,
  validateRepetitiveEmail,
  createUser,

};