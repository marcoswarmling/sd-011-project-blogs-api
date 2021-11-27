require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET_JWT = process.env.SECRECT_JWT;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createAuthentication = (data) => {
  const token = jwt.sign(data, SECRET_JWT, jwtConfig);
  return { token };
};

module.exports = createAuthentication;