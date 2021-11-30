const router = require('express').Router();
const BlogPostController = require('../controllers/BlogPostController');
const tokenValidation = require('../middlewares/tokenValidation');
const { 
  titleValidation,
  contentValidation,
  categoryValidation } = require('../middlewares/blogPostValidations');

const blogPostValidation = [titleValidation, contentValidation, categoryValidation];

router.post('/', tokenValidation, blogPostValidation, BlogPostController.createBlogPost);
router.get('/', tokenValidation, BlogPostController.getAllBlogPosts);
module.exports = router;
