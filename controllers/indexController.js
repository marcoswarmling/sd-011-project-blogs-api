const loginUser = require('./loginController');
const { getAllUsers, createUser, getUserById } = require('./userController');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById
};
