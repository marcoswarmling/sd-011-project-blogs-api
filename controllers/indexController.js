const loginUser = require('./loginController');
const { getAllUsers, createUser } = require('./userController');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};
