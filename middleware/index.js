const validedName = require('./displayNameValidator');
const validedEmail = require('./emailValidator');
const validedPassword = require('./passwordValidator');
const validedEmailLogin = require('./emailValidatorLogin');
const validedPasswordLogin = require('./passwordValidatorLogin');
const validedToken = require('./tokenValidator');
const validedCategoryName = require('./nameCategoryValidator');
const validedTitle = require('./titleValidator');
const validedContent = require('./contentValidator');
const validedCategoryId = require('./categoryIdValidation');

module.exports = {
  validedEmail,
  validedName,
  validedPassword,
  validedEmailLogin,
  validedPasswordLogin,
  validedToken,
  validedCategoryName,
  validedTitle,
  validedContent,
  validedCategoryId,
};
