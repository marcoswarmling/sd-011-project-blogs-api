const jwt = require('jsonwebtoken');

const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '7d' };
const secret = 'secret';

const generateToken = ({ displayName, email, password, image }) => {
  const data = { displayName, email, password, image };
  const token = jwt.sign(data, secret, JWT_CONFIG);
  return token;
};

const generateTokenOnLogin = (email, password) => {
  const data = { email, password };
  const token = jwt.sign(data, secret, JWT_CONFIG);
  return token;
};

module.exports = { generateToken, generateTokenOnLogin };
