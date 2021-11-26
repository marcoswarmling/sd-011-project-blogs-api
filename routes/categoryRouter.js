const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { categoryFields } = require('../middlewares');

const router = express.Router();

router.post('/', categoryFields, createCategory);
router.get('/', getCategories);

module.exports = router;