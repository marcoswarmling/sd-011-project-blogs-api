const route = require('express').Router();

const TokenValidate = require('../middlewares/checkAuthenticatedUser');
const BodyPostValidate = require('../middlewares/checkBlogPostData');
const BlogPostController = require('../controller/blogPostController');
const UserPost = require('../middlewares/checkUserPost');
const UserDeletePost = require('../middlewares/checkUserDeletePost');

route.post(
  '/',
  TokenValidate.checkAuthenticatedUser,
  BodyPostValidate.checkBodyBlogPost,
  BlogPostController.createBlogPost,
  );

route.get('/search', TokenValidate.checkAuthenticatedUser, BlogPostController.findPostByQueryParam);
route.get('/:id', TokenValidate.checkAuthenticatedUser, BlogPostController.getBlogPostById);
route.get('/', TokenValidate.checkAuthenticatedUser, BlogPostController.getAllBlogPosts);
route.put(
  '/:id',
  TokenValidate.checkAuthenticatedUser,
  UserPost.checkUserPost,
  BlogPostController.updatePostById,
);
route.delete(
  '/:id',
  TokenValidate.checkAuthenticatedUser,
  UserDeletePost.checkUserDeletePost,
  BlogPostController.excludeBlogPost,
  );

module.exports = route;