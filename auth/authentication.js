require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

function createToken(object) {
  return jwt.sign(object, SECRET);
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    return false;
  }
}
module.exports = {
  createToken,
  verifyToken,
};