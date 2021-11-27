const loginUser = require('./loginController');
const { getAllUsers, createUser, getUserById } = require('./userController');
const { createCategory } = require('./categoryController');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  createCategory,
};
