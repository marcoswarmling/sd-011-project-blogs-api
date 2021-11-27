const router = require('express').Router();
const validateJWT = require('../middlewares/validateJWT');
const {
  validatePostTitle,
  validatePostContent,
  validatePostCategoryIds,
} = require('../middlewares/validations');
const postController = require('../controllers/post');

router.post(
  '/',
  validateJWT,
  validatePostTitle,
  validatePostContent,
  validatePostCategoryIds,
  postController.createBlogPost,
);

router.get(
  '/',
  validateJWT,
  postController.getAllPosts,
);

module.exports = router;