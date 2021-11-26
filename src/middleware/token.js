const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ ...data }, secret, jwtConfig);
  return token;
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { email } = jwt.verify(token, secret, jwtConfig);
    const user = await User.findOne({ where: { email } });
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { createToken, verifyToken };