const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const { validateJWT } = require('../middlewares/validateJWT');
const { nameExists } = require('../middlewares/CategoryValidations');

// Req 5
router.post('/categories', nameExists, validateJWT, CategoryController.create);

// Req 6
router.get('/categories', validateJWT, CategoryController.getAll);

module.exports = router;
