const { validateJWT } = require('./jwtValidateMidlleware');
const { LoginValidation } = require('./loginMidlleware');
const { UserRegisterValidation } = require('./userMidlleware');

module.exports = {
  UserRegisterValidation,
  LoginValidation,
  validateJWT,
};
