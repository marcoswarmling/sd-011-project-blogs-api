const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');
const { createPost, getPosts, getById } = require('../controllers/postsControllers');
const { isValidBlogPost } = require('../middlewares/validations');

router.post('/', auth, isValidBlogPost, createPost);
router.get('/', auth, getPosts);
router.get('/:id', auth, getById);

module.exports = router;
