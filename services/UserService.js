const jwt = require('jsonwebtoken');

const secret = 'secret';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const { User } = require('../models');

const validateDataUser = (displayName, password) => {
  if (displayName.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long', status: 400,
    };
  }
  if (!password) {
    return {
      message: '"password" is required', status: 400,
    };
  }
  if (password.length !== 6) {
    return {
      message: '"password" length must be 6 characters long', status: 400,
    };
  }
  return false;
};

const validateEmail = async (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return {
      message: '"email" is required', status: 400,
    };
  }
  const user = await User.findOne({ where: { email } });
  if (!regexEmail.test(email)) {
    return {
      message: '"email" must be a valid email', status: 400,
    };
  }
  if (user) {
    return {
      message: 'User already registered', status: 409,
    };
  }
  return false;
};

const create = async (displayName, email, password, image) => {
  if (validateDataUser(displayName, password)) {
    return validateDataUser(displayName, password);
  }
  if (await validateEmail(email)) {
    const response = await validateEmail(email);
    return response;
  }
  await User.create({ displayName, email, password, image });
  const userWithoutPassword = { email, displayName };
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
  return { token };
};

module.exports = {
  create,
};
