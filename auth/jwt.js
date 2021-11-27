require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (login) => {
  try {
  const configJwt = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };  
  const token = jwt.sign({ login }, process.env.secret, configJwt);
  return { token };
  } catch (error) {
    return error.message;
  }
};