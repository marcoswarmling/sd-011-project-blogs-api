const router = require('express').Router();
const CategoriesController = require('../controllers/categories.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// POSTS
router.post('/', authMiddleware, CategoriesController.createCategory);

module.exports = router;