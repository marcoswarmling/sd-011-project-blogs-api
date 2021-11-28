const express = require('express');
const rescue = require('express-rescue');
const { postController } = require('../controllers');
const { validateToken, validatePost } = require('../middlewares');

const router = express.Router();

router
  .post('/post', rescue(validateToken), rescue(validatePost), rescue(postController.newPost))
  .get('/post/:id', rescue(validateToken), rescue(postController.getPostById))
  .get('/post', rescue(validateToken), rescue(postController.getPosts));

module.exports = router;