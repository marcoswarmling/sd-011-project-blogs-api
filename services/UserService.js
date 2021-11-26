const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createNewUser = async (displayName, email, password, image) => {
  try {
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;    
  } catch (error) {
    return error.message;
  }   
};

const login = async (email, _password) => {
  try {
    const token = jwt.sign({ email }, secret, jwtConfig);
    return token;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createNewUser,
  login,
};
