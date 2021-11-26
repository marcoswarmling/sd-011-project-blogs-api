const { registerUserValidation } = require('./UserValidations');
const { loginValidation } = require('./LoginValidations');
const { validateJWT } = require('./ValidateJWT');
const { registerCategoryValidation } = require('./CategoryValidations');

module.exports = {
  registerUserValidation,
  loginValidation,
  validateJWT,
  registerCategoryValidation,
};
