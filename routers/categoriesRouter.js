const router = require('express').Router();
const categoriesController = require('../controller/categoriesController');
const { checkCategories } = require('../middleware/categories');
const { authorizationToken } = require('../middleware/user');

router.post('/categories', checkCategories, authorizationToken, categoriesController.create);
router.get('/categories', authorizationToken, categoriesController.getAll);

module.exports = router;