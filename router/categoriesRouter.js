const router = require('express').Router();

const { validateCategories } = require('../middlewares/categoriesValidation');
const { validateToken } = require('../middlewares/validateJWT');
const categoriesController = require('../controllers/categoriesController');

router.post('/', validateCategories, validateToken, categoriesController.createCategories);

module.exports = router;