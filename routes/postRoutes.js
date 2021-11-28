const express = require('express');

const { postValidation } = require('../validations');
const { createPost } = require('../controllers/postController');

const router = express.Router();

// Requisito 7 - Rota POST - Post
router.post('/', postValidation, createPost);

module.exports = router;