const ApiError = require('../utils/ApiError');
const VALIDATION = require('../utils/validateFields');

function validateFieldsNotExistsOrEmpty(email, password, next) {
  if (!email) next(ApiError.requiredEmail);
  if (!password) next(ApiError.requiredPassword);
  if (email.lenght === 0) next(ApiError.emptyEmail);
  if (password.length === 0) next(ApiError.emptyPassword);

  return false;
}

function validateLogInInfos(req, _res, next) {
  const { email, password } = req.body;
  
  const invalidFields = validateFieldsNotExistsOrEmpty(email, password, next); 

  if (!invalidFields) {
    const validateEmail = VALIDATION.validateEmail(email);
    const validatePassword = VALIDATION.validateEmail(email);

    if (validateEmail && validatePassword) next();

    return next(ApiError.internalServerError());
  }
}

module.exports = validateLogInInfos;
