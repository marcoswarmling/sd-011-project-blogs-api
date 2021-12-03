const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT = process.env.JWT_SECRET;

function generateToken(email) {
  const payload = { email };
  const token = jwt.sign(payload, JWT);
  return token;
}

module.exports = { generateToken };