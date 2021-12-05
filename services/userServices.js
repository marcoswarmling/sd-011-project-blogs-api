const { User } = require('../models');

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) return false;
  return true;
};

const validateEmail = (email) => {
  const emailRegex = new RegExp(/^[\w.]+@[a-z]+.\w{2,3}$/g);
  return emailRegex.test(email);
};

const validateUser = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) return true;
  return false;
};

const addUser = async (user) => {
  await User.create(user);
  return User;
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validateUser,
  addUser,
};