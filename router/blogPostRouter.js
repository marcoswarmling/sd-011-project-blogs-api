const router = require('express').Router();
const blogPostController = require('../controller/BlogPostController');
const {
  isTitleValid,
  isContentValid,
  isCategoryIdsValid,
} = require('../validations/blogPostValidation');
const isTokenValid = require('../validations/tokenValidation');

const validations = [isTokenValid, isTitleValid, isContentValid, isCategoryIdsValid];

router.post('/', validations, blogPostController.createBlogPost);

module.exports = router;
