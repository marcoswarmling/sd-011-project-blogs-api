const route = require('express').Router();

const TokenValidate = require('../middlewares/checkAuthenticatedUser');
const BodyPostValidate = require('../middlewares/checkBlogPostData');
const BlogPostController = require('../controller/blogPostController');

route.post(
  '/',
  TokenValidate.checkAuthenticatedUser,
  BodyPostValidate.checkBodyBlogPost,
  BlogPostController.createBlogPost,
  );

route.get('/', TokenValidate.checkAuthenticatedUser, BlogPostController.getAllBlogPosts);

module.exports = route;