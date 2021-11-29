const express = require('express');

const { postValidation } = require('../validations');
const { createPost, listPosts } = require('../controllers/postsController');

const router = express.Router();

router.post('/', postValidation, createPost);
router.get('/', listPosts);

module.exports = router;