const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret';

module.exports = {
  createToken: (payload) => {
    const jwtConfig = {
      expiresIn: '2h',
      algorithm: 'HS256',
    };

    return jwt.sign(payload, jwtSecret, jwtConfig);
  },

  validateToken: (token) => jwt.verify(token, jwtSecret),
};
