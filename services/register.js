const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (displayName) => {
  const token = jwt.sign({ data: displayName }, secret, jwtConfig);
  return token;
};

const registerUser = async (userData) => {
  const {
    displayName,
    email,
    password,
    image,
  } = userData;

  try {
    await User.create({
      displayName,
      email,
      password,
      image,
    });

    return generateToken(displayName);
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerUser,
  generateToken,
};
