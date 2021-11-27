const { createUser, getAllUsers, getUserById } = require('./userService');
const { loginUser } = require('./loginService');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};
