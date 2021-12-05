const jwt = require('jsonwebtoken');

const secret = 'secret';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const { User } = require('../models');

const generateToken = (email, password) => {
  const userWithoutPassword = { email, password };
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
  return token;
};

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

const validateExistEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return {
      message: 'User already registered', status: 409,
    };
  }
  return false;
};

const validateEmail = (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return {
      message: '"email" is required', status: 400,
    };
  }
  if (!regexEmail.test(email)) {
    return {
      message: '"email" must be a valid email', status: 400,
    };
  }
  return false;
};

const create = async (displayName, email, password, image) => {
  if (validateDataUser(displayName, password)) {
    return validateDataUser(displayName, password);
  }
  if (validateEmail(email)) {
    return validateEmail(email);
  }
  if (await validateExistEmail(email)) {
    const response = await validateExistEmail(email);
    return response;
  }
  await User.create({ displayName, email, password, image });
  const token = generateToken(email, password);
  return { token };
};

const getAllUsers = async () => {
  const response = await User.findAll();
  return response;
};

const getUserById = async (id) => {
  const response = await User.findOne({ where: { id } });
  if (!response) return { message: 'User does not exist', status: 404 };
  return response;
};

module.exports = {
  create,
  generateToken,
  getAllUsers,
  getUserById,
};
