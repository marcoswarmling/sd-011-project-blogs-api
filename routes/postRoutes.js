const Router = require('express').Router();
const { createBlogPost, getAllPosts } = require('../controllers/postController');
const {
  validateTitle,
  validateContent,
  validateCatIds,
} = require('../middlewares/postValidation');
const { validateToken } = require('../middlewares/tokenManager');

Router.post('/',
  validateToken,
  validateTitle,
  validateContent,
  validateCatIds,
  createBlogPost);

Router.get('/', validateToken, getAllPosts);

module.exports = Router;