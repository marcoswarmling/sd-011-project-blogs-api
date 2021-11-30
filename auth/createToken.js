require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (login) => {
  try {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };  
  const token = jwt.sign({ login }, secret, jwtConfig);
  return { token };
  } catch (error) {
    return error.message;
  }
};

module.exports = createToken;
