const express = require('express');

const routes = express.Router();

const tokenMiddleware = require('../middlewares/token');
const middlewares = require('../middlewares/posts');
const controllers = require('../controllers/posts');

routes
  .post('/',
    tokenMiddleware,
    middlewares.validateCreatePostWithJoi,
    middlewares.validateRegisteredCategories,
    controllers.createNewPost)
  .get('/',
    tokenMiddleware,
    controllers.getAllPosts);

module.exports = routes;
