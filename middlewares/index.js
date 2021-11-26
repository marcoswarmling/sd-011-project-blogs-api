const { registerUserValidation } = require('./UserValidations');
const { loginValidation } = require('./LoginValidations');
const { validateJWT } = require('./ValidateJWT');

module.exports = {
  registerUserValidation,
  loginValidation,
  validateJWT,
};
