const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const validateJWT = require('../auth/validateJWT');
const { paramsValidation } = require('../validation/validateCategories');

router.post('/', validateJWT, paramsValidation, categoriesController.createCategorie);
// router.get('/', validateJWT, categoriesController.getCategorie);

module.exports = router;