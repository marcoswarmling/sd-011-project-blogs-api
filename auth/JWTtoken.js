require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret';

const jwtToken = (login) => {
  try {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ login }, jwtSecret, jwtConfig);

    return { token };
  } catch (error) {
    return error.message;
  }
};

module.exports = jwtToken;
