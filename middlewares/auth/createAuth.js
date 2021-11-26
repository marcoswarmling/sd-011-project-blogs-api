require('dotenv').config();
const jwt = require('jsonwebtoken');

const passwordJWT = process.env.JWT_SECRET;

const createAuth = async (email, password, id) => {
  const userData = { email, password, id };
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(userData, passwordJWT, jwtConfig);
  return { token };
};

module.exports = { 
  createAuth,
};
