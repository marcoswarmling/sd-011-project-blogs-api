const { User } = require('../models');
const { generateToken } = require('./UserService');

const validateEmail = (email, password) => {
  if (email === '') {
    return { message: '"email" is not allowed to be empty', status: 400 };
  }
  if (!email) {
    return { message: '"email" is required', status: 400 };
  }
  if (password === '') {
    return { message: '"password" is not allowed to be empty', status: 400 };
  }
  if (!password) {
    return { message: '"password" is required', status: 400 };
  }
  return false;
};

const signIn = async (email, password) => {
  if (validateEmail(email, password)) return validateEmail(email, password);
  const response = await User.findOne({ where: { email, password } });
  console.log(response);
  if (!response) return { message: 'Invalid fields', status: 400 };
  const token = generateToken(email, password);
  return { token };
};

module.exports = {
  signIn,
};