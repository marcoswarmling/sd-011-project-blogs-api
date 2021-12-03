const validateDisplayName = require('./displayNameValidate');
const validateEmail = require('./emailValidate');
const validateName = require('./nameValidate');
const validatePassword = require('./passwordValidate');

module.exports = {
  validateEmail,
  validateDisplayName,
  validatePassword,
  validateName,
};