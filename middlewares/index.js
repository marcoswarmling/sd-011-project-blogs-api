const { registerUserValidation } = require('./UserValidations');
const { loginValidation } = require('./LoginValidations');
const { validateJWT } = require('./ValidateJWT');
const { registerCategoryValidation } = require('./CategoryValidations');
const { postValidation, updateValidation, deleteValidation } = require('./BlogPostsValidations');

module.exports = {
  registerUserValidation,
  loginValidation,
  validateJWT,
  registerCategoryValidation,
  postValidation,
  updateValidation,
  deleteValidation,
};
