const router = require('express').Router();
const BlogPosts = require('../controllers/blogPostsControllers');

const {
  validateBlogPostJoi,
  checkCategoriesExists,
} = require('../middlewares/validateBlogPost');

const {
  isValidateToken,
} = require('../middlewares/auth/validateAuth');

router.get('/', isValidateToken, BlogPosts.getAllPostCategories);
router.post(
    '/', validateBlogPostJoi, isValidateToken, checkCategoriesExists, BlogPosts.createBlogPosts,
    );

module.exports = router;
