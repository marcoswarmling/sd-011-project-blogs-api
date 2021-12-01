const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    return jwt.sign(payload, jwtSecret, jwtConfig);
  },

  validateToken: (token) => jwt.verify(token, jwtSecret),
};