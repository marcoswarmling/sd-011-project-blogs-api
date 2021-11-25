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

const isValid = async (displayName, email, password) => {
  if (isDisplayNameValid(displayName)) return isDisplayNameValid(displayName);
  if (isEmailValid(email)) return isEmailValid(email);
  if (await isEmailUnique(email)) return isEmailUnique(email);
  if (isPasswordValid(password)) return isPasswordValid(password);
  return null;
};

const create = async ({ displayName, email, password, image }) => {
  const isValidData = await isValid(displayName, email, password);
  if (isValidData) return isValidData;

  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

module.exports = {
  create,
};