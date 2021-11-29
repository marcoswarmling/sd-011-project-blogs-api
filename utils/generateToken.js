require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (id, email) => (
  jwt.sign({ id, email }, jwtSecret, jwtConfig)
);

module.exports = { generateToken };
