const router = require('express').Router();
const authToken = require('../auth/authUser');
const { createCategorie } = require('../controllers/categoriesController');
const { validateCategorieField } = require('../middlewares/categorieMiddlewares');

router.post('/categories', authToken, validateCategorieField, createCategorie);

module.exports = router;