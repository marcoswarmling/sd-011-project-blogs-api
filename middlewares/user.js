const jwt = require('jsonwebtoken');
const { created } = require('../utils/codes');
const service = require('../services/user');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const registerUser = async (req, res) => {
  const user = req.body;
  const registeredUser = await service.registerUser(user);
  const token = jwt.sign({ data: { ...registeredUser } }, secret, jwtConfig);
  return res.status(created).json({ token });
};

module.exports = {
  registerUser,
};