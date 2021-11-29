const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
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

    const generateToken = jwt.sign({ data: displayName }, secret, jwtConfig);
    return generateToken;
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerUser,
};
