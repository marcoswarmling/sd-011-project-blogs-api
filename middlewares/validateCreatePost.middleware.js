const VALIDATION = require('../utils/validateFields');

function validatePostFields(req, _res, next) {
  const { body } = req;

  const isInvalidFields = VALIDATION.validatePostFields(body);
  if (isInvalidFields) return next(isInvalidFields());

  return next();
}

module.exports = validatePostFields;