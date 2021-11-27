const route = require('express').Router();

const TokenValidate = require('../middlewares/checkAuthenticatedUser');
const BlogPostController = require('../controller/blogPostController');

route.post('/', TokenValidate.checkAuthenticatedUser, BlogPostController.createBlogPost);

module.exports = route;