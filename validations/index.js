const validateDisplayName = require('./displayNameValidate');
const validateEmail = require('./emailValidate');
const validatePassword = require('./passwordValidate');

module.exports = {
  validateEmail,
  validateDisplayName,
  validatePassword,
};