const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const jwtConfiguration = {
  expiresIn: '4h',
  algorithm: 'HS256',
};

const isEmailRegistered = async (email) => {
  const emailExists = await Users.findOne({ where: { email } });

  if (emailExists) {
    return true;
  }

  return false;
};

const createUser = async (displayName, email, password, image) => {
  await Users.create({ displayName, email, password, image });

  const token = jwt.sign({ data: { email, password } }, process.env.JWT_SECRET, jwtConfiguration);

  return token;
};

module.exports = {
  createUser,
  isEmailRegistered,
};
