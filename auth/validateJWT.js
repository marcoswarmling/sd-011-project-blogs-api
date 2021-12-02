require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (payload) => jwt.sign(payload, secret);

const validateToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  validateToken,
};