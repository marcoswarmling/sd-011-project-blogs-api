const routes = require('express').Router();
const blogPosts = require('../controllers/blogPostControlers');

const {
  isValidToken,
  isDataCorrect,
  idValidCategory,
} = require('../middlewares/postsvalidation');

routes.post(
  '/',
  isValidToken,
  isDataCorrect,
  idValidCategory,
  blogPosts.addPost,
);

routes.get('/', blogPosts.getPost);

module.exports = routes;