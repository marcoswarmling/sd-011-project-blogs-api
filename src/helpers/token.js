require('dotenv').config();
const { sign } = require('jsonwebtoken');

module.exports = {
  generateToken: async (userId, displayName, email) => {
    const token = sign(
      { userId, displayName, email },
      process.env.JWT_SECRET,
      { expiresIn: '7d', algorithm: 'HS256' },
    );

    return token;
  },
};
