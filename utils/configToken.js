require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};
module.exports = {
  secret,
  jwtConfig,
};
