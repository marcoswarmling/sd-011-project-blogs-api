require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY || 'secret';

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

module.exports = { 
  JWT: (payload) => jwt.sign(payload, jwtSecret, jwtConfig),
  validateToken: (token) => jwt.verify(token, jwtSecret, jwtConfig),
};