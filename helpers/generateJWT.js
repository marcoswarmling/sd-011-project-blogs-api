const jwt = require('jsonwebtoken');

const JWT_CONFIG = { algorithm: 'HS256', expiresIn: '7d' };

const generateToken = ({ displayName, email, password, image }) => {
  const data = { displayName, email, password, image };
  const token = jwt.sign(data, process.env.JWT, JWT_CONFIG);
  console.log(token);
  return token;
};

module.exports = { generateToken };
