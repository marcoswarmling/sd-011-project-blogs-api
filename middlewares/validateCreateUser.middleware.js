// const ApiError = require('../utils/ApiError');
const VALIDATION = require('../utils/validateFields');

function validateUserFields(req, _res, next) {
  const { body } = req;

  const invalidFields = VALIDATION.verifyFieldExists(body, next)
  || VALIDATION.verifyFieldLength(body, next)
  || VALIDATION.verifyEmailFormat(body, next);

  if (!invalidFields) return next();
}

module.exports = validateUserFields;