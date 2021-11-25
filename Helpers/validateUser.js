// displayName > 8, email = valid, password = 6
const createError = require('http-errors');
const { status, usersMessages } = require('./status&messages');

const validPassword = (password) => {
  if (!password) {
    createError(status.badRequest, usersMessages.passwordRequired);
  }
  if (password.length !== 6) {
    createError(status.badRequest, usersMessages.password);
  }
  return false;
};

const validDisplayName = (displayName) => {
  if (displayName.length < 8) {
    createError(status.badRequest, usersMessages.displayName);
  }
  return false;
};

const validEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!email) { 
    createError(status.badRequest, usersMessages.emailRequired);
  }
  if (!regex(email)) {
    createError(status.badRequest, usersMessages.email);
  }
  return false;
};

const validateUser = (displayName, email, password) => {
  validDisplayName(displayName);
  validEmail(email);
  validPassword(password);
};

module.exports = { validateUser, validPassword, validDisplayName, validEmail };
