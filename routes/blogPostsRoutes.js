const router = require('express').Router();
const blogPostsController = require('../controllers/blogPostsController');
const tokenValidation = require('../Validations/tokenValidation');
const {
  validateTitle,
  validateContent,
  validateCategory } = require('../Validations/blogPostsValidations');
  
router.post('/',
validateTitle,
validateContent,
validateCategory, tokenValidation, blogPostsController.createBlogPosts);
router.get('/', tokenValidation, blogPostsController.getBlogPosts);

module.exports = router;