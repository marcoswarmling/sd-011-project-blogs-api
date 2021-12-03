const { nameValidation } = require('./categoriesMidlleware');
const { jwtValidation } = require('./jwtValidateMidlleware');
const { LoginValidation } = require('./loginMidlleware');
const { UserRegisterValidation } = require('./userMidlleware');

module.exports = {
  UserRegisterValidation,
  LoginValidation,
  jwtValidation,
  nameValidation,
};
