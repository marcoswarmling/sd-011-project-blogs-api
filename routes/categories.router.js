const router = require('express').Router();
const CategoriesController = require('../controllers/categories.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// GETS
router.get('/', authMiddleware, CategoriesController.getAllCategories);

// POSTS
router.post('/', authMiddleware, CategoriesController.createCategory);

module.exports = router;