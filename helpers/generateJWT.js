const jwt = require('jsonwebtoken');

require('dotenv').config();

const PRIVATE_KEY = process.env.JWT_SECRET || '27mr';

const createToken = (values) => {
  const token = jwt.sign(
    values,
    PRIVATE_KEY, { expiresIn: '7d' },
  );

  return token;
};

module.exports = { createToken };