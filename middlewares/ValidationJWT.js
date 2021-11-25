const jwt = require('jsonwebtoken');
require('dotenv/config');

const jwtConfig = {
  algorithm: 'HS256',
};

const createToken = (email) => {
  const token = jwt.sign({ email },
    process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
