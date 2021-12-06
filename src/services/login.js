const jwt = require('jsonwebtoken');
require('dotenv').config();

const segredo = process.env.JWT_SECRET; // << Chave "secreta"

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

module.exports = function login(user) {
  try {
    return jwt.sign({ data: user }, segredo, jwtConfig);
  } catch (error) {
    return error;
  }
};