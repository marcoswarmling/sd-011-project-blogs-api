const postRoutes = require('express').Router();
const controller = require('../controllers/postController');
const validateToken = require('../auth/validateToken');
const { validatePost } = require('../validations/validateBody');

postRoutes.route('/')
  .post(validateToken, validatePost, controller.createPost)
  .get(validateToken, controller.getPosts);

module.exports = postRoutes;
