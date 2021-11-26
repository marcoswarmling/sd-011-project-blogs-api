const jwt = require('jsonwebtoken');
const userServices = require('../services/userServices');

const secret = 'seusecretdetoken';

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userServices.createUser(displayName, email, password, image);
  if (response.error) {
    const { error } = response;
    if (error.message === 'User already registered') {
      return res.status(409).json(error);
    }
    return res.status(400).json(error);
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userServices.login(email, password);
  if (response.error) {
    const { error } = await response;
    return res.status(400).json(error);
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userServices.getUsers();
  return res.status(200).json(users);
};

module.exports = { createUser, login, getUsers };