const validateToken = require('./validateToken');
const validateUser = require('./validateUser');
const validateCategory = require('./validateCategory');
const validateBlogPost = require('./validateBlogPost');
const handleError = require('./handleError');

module.exports = {
  validateToken,
  validateUser,
  validateCategory,
  validateBlogPost,
  handleError,
};
