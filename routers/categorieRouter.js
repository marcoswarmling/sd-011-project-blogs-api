const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');

const { createCategory, getCategories } = require('../controllers/categoriesControllers');
const { isValidCategorie } = require('../middlewares/validations');

router.get('/', auth, getCategories);
router.post('/', auth, isValidCategorie, createCategory);

module.exports = router;
