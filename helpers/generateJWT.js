const jwt = require('jsonwebtoken');

require('dotenv').config();

const PRIVATE_KEY = process.env.JWT_SECRET || '27mr';

const createToken = (values) => {
  const { email, password } = values;

  const token = jwt.sign(
    { email, password },
    PRIVATE_KEY, { expiresIn: '7d' },
  );

  return token;
};

module.exports = { createToken };