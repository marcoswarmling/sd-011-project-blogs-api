const express = require('express');
const { auth } = require('../middlewares/auth');
const { createPost, getAllPosts, getById } = require('../controllers/postController');

const router = express.Router(); 
router.post('/', auth, createPost);
router.get('/', auth, getAllPosts);
router.get('/:id', auth, getById);

module.exports = router;