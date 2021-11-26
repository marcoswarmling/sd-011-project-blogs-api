require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getToken = (data) => jwt.sign({ data }, secret, jwtConfig);
const verifyToken = (token) => jwt.verify(token, secret, jwtConfig);

module.exports = {
  verifyToken,
  getToken,
};
