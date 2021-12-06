const express = require('express');
const { auth } = require('../middlewares/auth');
const { createCategorie, getCategorieAll } = require('../controllers/categorieController');
const { validateNameCategories } = require('../middlewares/validate');

const router = express.Router(); 
router.get('/', auth, getCategorieAll);
router.post('/', auth, validateNameCategories, createCategorie);

module.exports = router;