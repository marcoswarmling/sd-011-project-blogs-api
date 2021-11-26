require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

function generateToken(object) {
  const token = jwt.sign({ data: object }, secret, jwtConfig);
  return token;
}

const validAuth = (token) => {
  const decode = jwt.verify(token, secret);
  return decode;
};

module.exports = {
  generateToken,
  validAuth,
};
