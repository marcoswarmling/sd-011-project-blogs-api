const express = require('express');

const { Category } = require('../controllers');
const { validateCategory, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateToken, validateCategory, Category.createCategory);

module.exports = router;