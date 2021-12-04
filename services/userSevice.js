const { User } = require('../models');

const EMAIL_EXISTS_ERROR = {
  message: 'User already registered',
};

const INVALID_FIELDS_ERROR = {
  message: 'Invalid fields',
};

const emailExists = async (email) => {
  const user = await User
    .findOne({ where: { email } });

  if (!user) return false;

  return true;
};

const createUser = async (displayName, email, password, image) => {
  const isEmailExists = await emailExists(email);
  
  if (isEmailExists) return EMAIL_EXISTS_ERROR;

  const user = await User
    .create({ displayName, email, password, image });

  return user;
};

const login = async (email, password) => {
  const user = await User
    .findOne({ where: { email, password } });

  if (!user) return INVALID_FIELDS_ERROR;

  return user;
};

module.exports = {
  createUser,
  login,
};