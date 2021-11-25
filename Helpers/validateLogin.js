const createError = require('http-errors');
const { status, loginMessages } = require('./status&messages');

const validEmail = (email) => {
  if (!email) { 
    throw createError(status.badRequest, loginMessages.emailRequired);
  }
  if (email.length === 0) {
    throw createError(status.badRequest, loginMessages.emailEmpty);
  }
  return false;
};

const validPassword = (password) => {
  if (!password) {
    throw createError(status.badRequest, loginMessages.passwordRequired);
  }
  if (password.length === 0) {
    throw createError(status.badRequest, loginMessages.passwordEmpty);
  }
  return false;
};

const validLogin = (email, password) => {
  validEmail(email);
  validPassword(password);
  return false;
};

module.exports = { validLogin };