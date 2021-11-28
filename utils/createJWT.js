require('dotenv').config();
const jwt = require('jsonwebtoken');

const createJWT = (id, email, _password) => {
  const token = jwt.sign({ id, email }, 
    process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = createJWT;
