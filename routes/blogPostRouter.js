const blogPostRoutes = require('express').Router();
const rescue = require('express-rescue');

const isValid = require('../validations/blogPostValidation');

const auth = require('../validations/authJWT');
const blogPostController = require('../controllers/blogPostController');

blogPostRoutes.post(
  '/',
  auth.validateJWT,
  isValid.isValidPost,
  rescue(blogPostController.createNewPost),
);

blogPostRoutes.get(
  '/',
  auth.validateJWT,
  rescue(blogPostController.getAllPosts),
);

blogPostRoutes.get(
  '/:id',
  auth.validateJWT,
  rescue(blogPostController.getPostById),
);

module.exports = blogPostRoutes;
