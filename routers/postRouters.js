const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');
const { createPost } = require('../controllers/postsControllers');
const { isValidBlogPost } = require('../middlewares/validations');

router.post('/', auth, createPost, isValidBlogPost);

module.exports = router;
