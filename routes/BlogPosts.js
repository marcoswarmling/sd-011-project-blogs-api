const express = require('express');

const { BlogPost } = require('../controllers');
const { validateToken, validateBlogPost } = require('../middlewares');

const router = express.Router();

router.post('/', validateToken, validateBlogPost, BlogPost.createPost);
router.get('/', validateToken, BlogPost.getAllPosts);
router.get('/:id', validateToken, BlogPost.getPostById);

module.exports = router;