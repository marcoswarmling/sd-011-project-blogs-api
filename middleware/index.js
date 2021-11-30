const validedName = require('./displayNameValidator');
const validedEmail = require('./emailValidator');
const validedPassword = require('./passwordValidator');
const validedEmailLogin = require('./emailValidatorLogin');
const validedPasswordLogin = require('./passwordValidatorLogin');
const validedToken = require('./tokenValidator');
const validedCategoryName = require('./nameCategoryValidator');

module.exports = {
  validedEmail,
  validedName,
  validedPassword,
  validedEmailLogin,
  validedPasswordLogin,
  validedToken,
  validedCategoryName,
};
