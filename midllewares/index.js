const { LoginValidation } = require('./loginMidlleware');
const { UserRegisterValidation } = require('./userMidlleware');

module.exports = {
  UserRegisterValidation,
  LoginValidation,
};
