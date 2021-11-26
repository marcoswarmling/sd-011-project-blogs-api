const { User } = require('../models');

const isDisplayNameValid = (displayName) => {
  if (!displayName || displayName.length <= 7) {
    return ({ message: '"displayName" length must be at least 8 characters long' }); 
  }
  return null;
};

const isEmailUnique = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return ({ message: 'User already registered' });
  }
  return null;
};

const isPasswordValid = (password) => {
  if (!password) {
    return ({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return ({ message: '"password" length must be 6 characters long' }); 
  }
  return null;
};

const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return ({ message: '"email" is required' });
  }
  if (!regex.test(email)) {
    return ({ message: '"email" must be a valid email' });
  }
  return null;
};

const isUserValid = async (displayName, email, password) => {
  if (isDisplayNameValid(displayName)) return isDisplayNameValid(displayName);
  if (isEmailValid(email)) return isEmailValid(email);
  if (await isEmailUnique(email)) return isEmailUnique(email);
  if (isPasswordValid(password)) return isPasswordValid(password);
  return null;
};

const isLoginEmailValid = (email) => {
  if (email === '') {
    return ({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return ({ message: '"email" is required' });
  }
  return null;
};

const isLoginPasswordValid = (password) => {
  if (password === '') {
    return ({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return ({ message: '"password" is required' });
  }
  return null;
};

const loginEmailExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return ({
      message: 'Invalid fields',
    });
  }
  return user;
};

const validateLogin = async (email, password) => {
  if (isLoginEmailValid(email)) return isLoginEmailValid(email);
  if (isLoginPasswordValid(password)) return isLoginPasswordValid(password);
  if (await loginEmailExists(email)) return loginEmailExists(email);
  return null;
};

const create = async ({ displayName, email, password, image }) => {
  const userNotValid = await isUserValid(displayName, email, password);
  if (userNotValid) return userNotValid;

  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const login = async (email, password) => {
  const response = await validateLogin(email, password);
  return response;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};