const ApiError = require('../utils/ApiError');
const VALIDATION = require('../utils/validateFields');

function validateLogInInfos(req, _res, next) {
  const { body } = req;
  const { email, password } = body;

  const validEmailLength = VALIDATION.validateEmailNotEmpty(email);
  if (!validEmailLength) return next(ApiError.emptyEmail());

  const validPasswordLength = VALIDATION.validateEmailNotEmpty(password);
  if (!validPasswordLength) return next(ApiError.emptyPassword());

  const fieldExists = VALIDATION.verifyFieldExists(body);
  if (fieldExists) return next(fieldExists());

  return next();
}

module.exports = validateLogInInfos;
