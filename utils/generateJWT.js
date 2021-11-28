const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = (user) => jwt.sign({ data: user }, SECRET, jwtConfig);
