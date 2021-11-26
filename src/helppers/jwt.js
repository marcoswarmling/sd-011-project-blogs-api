const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET_KEY;

module.exports = {
  JWT: (payload) => {
    const jwtConfig = {
      expiresIn: '2h',
      algorithm: 'HS256',
    };

    return jwt.sign(payload, jwtSecret, jwtConfig);
  },

  validateToken: (token) => jwt.verify(token, jwtSecret),
};