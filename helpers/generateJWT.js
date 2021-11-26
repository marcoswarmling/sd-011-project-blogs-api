const jwt = require('jsonwebtoken');

const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '7d' };
const secret = 'secret';

const generateToken = ({ displayName, email, password, image }) => {
  const data = { displayName, email, password, image };
  const token = jwt.sign(data, secret, JWT_CONFIG);
  console.log(token);
  return token;
};

module.exports = { generateToken };
