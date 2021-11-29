const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const createToken = (email, userId) => jwt.sign(
  { email, userId }, 
  process.env.JWT_SECRET,
  jwtConfig,
);

module.exports = {
  createToken,
};
