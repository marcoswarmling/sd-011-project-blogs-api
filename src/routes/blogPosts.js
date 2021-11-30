const express = require('express');

const Route = express.Router();

const BlogPostsController = require('../controllers/Categories');

Route.route('/')
  .post(BlogPostsController.create)
  .get(BlogPostsController.listAll);

module.exports = Route;
