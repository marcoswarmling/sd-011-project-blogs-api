const express = require('express');
const validateToken = require('../middlewares/validateToken');
const newPostMiddleware = require('../middlewares/validateNewPost');
const PostController = require('../controllers/postController');

const route = express.Router();

route.post(
  '/',
  validateToken,
  newPostMiddleware.validateCreatePostBody,
  newPostMiddleware.validateRegisteredCategories,
  PostController.create,
);

module.exports = route;
