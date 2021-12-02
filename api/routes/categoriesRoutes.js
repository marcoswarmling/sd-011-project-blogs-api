const router = require('express').Router();
const rescue = require('express-rescue');

const categoriesController = require('../controllers/categoriesControllers');

const middleware = require('../middlewares/validates');

router.post('/', middleware.validateCategories, rescue(categoriesController.createCategorie));
router.get('/', middleware.validateToken, rescue(categoriesController.getAllCategories));

module.exports = router;
