const express = require('express');

const { postValidation } = require('../validations');
const { createPost } = require('../controllers/postsController');

const router = express.Router();

router.post('/', postValidation, createPost);

module.exports = router;