const validedName = require('./nameValidator');
const validedEmail = require('./emailValidator');
const validedPassword = require('./passwordValidator');
const validedEmailLogin = require('./emailValidatorLogin');
const validedPasswordLogin = require('./passwordValidatorLogin');

module.exports = {
  validedEmail,
  validedName,
  validedPassword,
  validedEmailLogin,
  validedPasswordLogin,
};
