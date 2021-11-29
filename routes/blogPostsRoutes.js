const router = require('express').Router();

const {
  jwtValid,
} = require('../middleware/userMiddlw');

const {
  validBlogPost,
} = require('../middleware/blogMiddlw');

const {
  createBlogPost,
} = require('../controllers/BlogController');

router.post('/post', jwtValid, validBlogPost, createBlogPost);

module.exports = router;