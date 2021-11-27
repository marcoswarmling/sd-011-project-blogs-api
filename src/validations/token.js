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

module.exports = {
  createToken,
};
