const { createUser, getAllUsers, getUserById } = require('./userService');
const { loginUser } = require('./loginService');
const { createCategory, getCategories } = require('./categoryServices');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  createCategory,
  getCategories,
};
