const express = require('express');
const { createPost } = require('../controllers/postsController');
const { postFields } = require('../middlewares');

const router = express.Router();

router.post('/', postFields, createPost);
// router.get('/', getCategories);

module.exports = router;