const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  validatePosts,
} = require('../middlewares/blogPostValidations');

const {
  validateCategoryExist,
} = require('../middlewares/categoryValidations');

const {
  createPost,
} = require('../controllers/blogPostsControllers');

router.post('/',
  validateJWTToken,
  validatePosts,
  validateCategoryExist,
  createPost);

module.exports = router;