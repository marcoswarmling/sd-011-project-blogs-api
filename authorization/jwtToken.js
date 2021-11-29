require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (login) => {
  try {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ login }, process.env.SECRET, jwtConfig);
    return { token };
  } catch (error) {
      return error.message;
  }
};