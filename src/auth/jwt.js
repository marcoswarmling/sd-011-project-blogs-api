const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || '12346789';

const createJWT = (user) => {
  const payload = { ...user };

  const jwtConfig = { 
    algorithm: 'HS256',
    expiresIn: '24h',
  };

const jsonwebtoken = jwt.sign(payload, secret, jwtConfig);
return jsonwebtoken;
};

const verifyJWT = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { createJWT, verifyJWT };