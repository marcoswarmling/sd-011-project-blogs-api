const express = require('express');
const postControllers = require('../controllers/postControllers');
const protect = require('../auth/protect');
const validateSchemas = require('../middlewares/validateSchemas');
const blogPostsSchemas = require('../schemas/blogPostsSchemas');

const postRoutes = express.Router();

// /post
postRoutes
  .route('/')
  .post(protect, validateSchemas(blogPostsSchemas), postControllers.createPostController);

module.exports = postRoutes;
