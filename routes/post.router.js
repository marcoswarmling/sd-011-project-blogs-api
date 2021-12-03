const router = require('express').Router();
const PostController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validateCreatePostMiddleware = require('../middlewares/validateCreatePost.middleware');

// GETs
router.get('/', authMiddleware, PostController.getAllPosts);

// POSTs
router.post('/', authMiddleware, validateCreatePostMiddleware, PostController.createPost);

module.exports = router;