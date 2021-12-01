const jwt = require('jsonwebtoken');

const segredo = 'JWT_SECRET';

function generateToken(email) {
  const payload = { email };
  const token = jwt.sign(payload, segredo);
  return token;
}

module.exports = { generateToken };