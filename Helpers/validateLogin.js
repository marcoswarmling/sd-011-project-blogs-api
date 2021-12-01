// const createError = require('http-errors');
const { status, loginMessages } = require('./status&messages');

const verifyEmail = (email) => {
  if (email === undefined) { 
    return { status: status.badRequest, message: loginMessages.emailRequired };
  }
  if (email.length === 0) {
    return { status: status.badRequest, message: loginMessages.emailEmpty };
  }
  return false;
};

const verifyPassword = (password) => {
  if (password === undefined) {
    return { status: status.badRequest, message: loginMessages.passwordRequired };
  }
  if (password.length === 0) {
    return { status: status.badRequest, message: loginMessages.passwordEmpty };
  }
  return false;
};

module.exports = { verifyEmail, verifyPassword };
