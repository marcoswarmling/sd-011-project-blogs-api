const express = require('express');
const { createCategory } = require('../controllers/categoryController');
const { categoryFields } = require('../middlewares');

const router = express.Router();

router.post('/', categoryFields, createCategory);

module.exports = router;