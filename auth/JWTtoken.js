require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret';

const jwtToken = (login) => {
  try {
    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({ login }, jwtSecret, jwtConfig);

    return { token };
  } catch (error) {
    return error.message;
  }
};

module.exports = jwtToken;
