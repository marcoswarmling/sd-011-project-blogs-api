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
  getAllPosts,
  getPostById,
  createPost,
} = require('../controllers/blogPostsControllers');

router.get('/:id',
  validateJWTToken,
  getPostById);

router.get('/',
  validateJWTToken,
  getAllPosts);

router.post('/',
  validateJWTToken,
  validatePosts,
  validateCategoryExist,
  createPost);

module.exports = router;