require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const passwordJWT = process.env.JWT_SECRET;

const create = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  if (!newUser) {
    return { message: 'User already exists' };
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(newUser, passwordJWT, jwtConfig);

 return token;
};

module.exports = {
  create,
};