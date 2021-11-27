require('dotenv').config();
const jwt = require('jsonwebtoken');

const createJWT = (id, email, password) => {
  const token = jwt.sign({ id, email, password }, 
    process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = createJWT;
