const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign(user, process.env.JWT_SECRET, jwtConfig);

  return token;
};