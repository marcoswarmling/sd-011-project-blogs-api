const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = (user) => jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
