// const ApiError = require('../utils/ApiError');
const VALIDATION = require('../utils/validateFields');

function validateUserFields(req, _res, next) {
  try {
    const { body } = req;
  
    const fieldExists = VALIDATION.verifyFieldExists(body);
    if (fieldExists) return next(fieldExists);
    const fieldLengths = VALIDATION.verifyFieldLength(body);
    if (fieldLengths) return next(fieldLengths);
    const incorrectEmailFormat = VALIDATION.verifyEmailFormat(body);
    if (incorrectEmailFormat) return next(incorrectEmailFormat);
  
    return next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = validateUserFields;