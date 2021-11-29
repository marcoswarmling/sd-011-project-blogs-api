const validedName = require('./nameValidator');
const validedEmail = require('./emailValidator');
const validedPassword = require('./passwordValidator');
const validedEmailLogin = require('./emailValidatorLogin');
const validedPasswordLogin = require('./passwordValidatorLogin');
const validedToken = require('./tokenValidator')

module.exports = {
  validedEmail,
  validedName,
  validedPassword,
  validedEmailLogin,
  validedPasswordLogin,
  validedToken
};
