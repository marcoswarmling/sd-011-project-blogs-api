require('dotenv').config();
const { sign } = require('jsonwebtoken');

module.exports = {
  generateToken: async (displayName, email) => {
    const token = sign(
      { displayName, email },
      process.env.JWT_SECRET,
      { expiresIn: '7d', algorithm: 'HS256' },
    );

    return token;
  },
};
