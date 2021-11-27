const { createUser, getAllUsers } = require('./userService');
const { loginUser } = require('./loginService');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};
