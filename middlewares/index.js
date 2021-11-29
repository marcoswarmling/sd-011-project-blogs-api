const validateLogin = require('./validateLogin');
const validateNewUser = require('./validateNewUser');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');
const validatePostEdit = require('./validatePostEdit');

module.exports = {
  validateLogin,
  validateNewUser,
  validateToken,
  validateCategory,
  validatePost,
  validatePostEdit,
};