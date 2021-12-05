const router = require('express').Router();

const {
  createPost,
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

module.exports = router;