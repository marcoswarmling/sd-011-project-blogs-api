const users = require('./usersRoutes');
const login = require('./loginRoutes');
const categories = require('./categoriesRoutes');
const blogPosts = require('./blogPostsRoutes');

module.exports = {
  users,
  login,
  categories,
  blogPosts,
};