const { User } = require('../models');

const checkEmail = async (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!email || typeof email !== 'string') {
    return { code: 400, message: '"email" is required' };
  }
  if (!regex.test(email)) {
    return { code: 400, message: '"email" must be a valid email' };
  }
  
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) {
    return { code: 409, message: 'User already registered' };
  }
  return null;
};

const checkName = (name) => {
  if (!name || typeof name !== 'string' || name.length < 8) {
    return { code: 400, message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

const checkPassword = (password) => {
  if (!password || typeof password !== 'string') {
    return { code: 400, message: '"password" is required' };
  }
  if (password.length !== 6) {
    return { code: 400, message: '"password" length must be 6 characters long' };
  }
  return null;
};

module.exports = async ({ displayName, email, password }) => {
  if (checkName(displayName)) return checkName(displayName);
  if (checkPassword(password)) return checkPassword(password);
  if (checkEmail(email)) return checkEmail(email);
  return null;
};