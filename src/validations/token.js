const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const createToken = (email) => jwt.sign(
  { email }, 
  process.env.JWT_SECRET,
  jwtConfig,
);

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  createToken,
  verifyToken,
};
