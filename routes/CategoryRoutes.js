const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');

const { nameExists } = require('../middlewares/CategoryValidations');

// Req 5
router.post('/categories', nameExists, CategoryController.create);

// Req 6
router.get('/categories', CategoryController.getAll);

module.exports = router;
