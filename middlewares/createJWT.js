const jwt = require('jsonwebtoken');
require('dotenv/config');

const createJWT = (data) => {
  const jwtConfig = { expiresIn: '1d' };
  const { password: _, ...user } = data;

  const payload = { user, role: 'user' };
  const { JWT_SECRET } = process.env;

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = { createJWT };
