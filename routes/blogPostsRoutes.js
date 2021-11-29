const router = require('express').Router();

const {
  jwtValid,
} = require('../middleware/userMiddlw');

const {
  validBlogPost,
} = require('../middleware/blogMiddlw');

const {
  createBlogPost,
  getBlogPosts,
} = require('../controllers/BlogController');

router.post('/post', jwtValid, validBlogPost, createBlogPost);

router.get('/post', jwtValid, getBlogPosts);

module.exports = router;