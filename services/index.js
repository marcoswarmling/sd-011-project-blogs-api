const { createUser, getAllUsers, getUserById } = require('./userService');
const { loginUser } = require('./loginService');
const { createCategory } = require('./categoryServices');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  createCategory,
};
