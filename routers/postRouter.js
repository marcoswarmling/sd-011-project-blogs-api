const router = require('express').Router();

const {
  createPost,
  getAllPosts,
} = require('../controllers/postController');

const {
  titleValidator,
  contentValidator,
  categoryIdsValidator,
} = require('../middlewares/postValidation');

const { 
  validateTokenExistence,
  validateToken,
} = require('../middlewares/auth/tokenValidation');

router.post(
  '/post',
  titleValidator,
  contentValidator,
  categoryIdsValidator,
  validateTokenExistence,
  validateToken,
  createPost,
);

router.get(
  '/post',
  validateTokenExistence,
  validateToken,
  getAllPosts,
);

module.exports = router;