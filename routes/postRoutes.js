const express = require('express');
const rescue = require('express-rescue');
const { postController } = require('../controllers');
const { validateToken, validatePost, validatePostEdit } = require('../middlewares');

const router = express.Router();

router
  .post('/post', rescue(validateToken), rescue(validatePost), rescue(postController.newPost))
  .get('/post/search', rescue(validateToken), rescue(postController.queryPost))
  .get('/post/:id', rescue(validateToken), rescue(postController.getPostById))
  .delete('/post/:id', rescue(validateToken), rescue(postController.deletePost))
  .put('/post/:id',
    rescue(validatePostEdit),
    rescue(validateToken),
    rescue(postController.editPost))
  .get('/post', rescue(validateToken), rescue(postController.getPosts));

module.exports = router;