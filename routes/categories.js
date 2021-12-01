const router = require('express').Router();

const categoriesController = require('../controllers/categories');
const { validateToken } = require('../Middlewares/authorizations');

router.post('/', validateToken, categoriesController.createCategory);
router.get('/', validateToken, categoriesController.getCategories);

module.exports = router;