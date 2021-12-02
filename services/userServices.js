const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getUserEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  return userEmail;
};

const createUser = async ({ name, email, password, image }) => {
  await User.create({ name, email, password, image });

  const token = jwt.sign({ data: name }, secret, jwtConfig);
  return token;
};

const login = async (email) => {
  const userEmail = await getUserEmail(email);

  if (userEmail) {
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return token;
  }

  return false;
};

module.exports = {
  getUserEmail,
  createUser,
  login,
};
