const express = require('express');
const { createPost, getPosts } = require('../controllers/postsController');
const { postFields } = require('../middlewares');

const router = express.Router();

router.post('/', postFields, createPost);
router.get('/', getPosts);

module.exports = router;