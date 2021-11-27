const express = require('express');

const router = express.Router();

const {
  jwtAuthorization,
} = require('../middleware/userMiddleware');

const {
  loginAuthentication,
  categoryExists,
} = require('../middleware/postMiddleware');

const postController = require('../controller/postController');

router.post('/', loginAuthentication, categoryExists, jwtAuthorization, postController.createPost);
router.get('/', jwtAuthorization, postController.getAllPosts);
router.get('/:id', jwtAuthorization, postController.getPostById);

module.exports = router;