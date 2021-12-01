require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
function createToken(object) {
  return jwt.sign(object, SECRET);
}

module.exports = {
  createToken,
};