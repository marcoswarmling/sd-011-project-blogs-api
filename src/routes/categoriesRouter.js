const router = require('express').Router();
const categoriesControllers = require('../controllers/categoriesControllers');
const {
  categoriesValidation,
} = require('../middlewares/categoriesMiddlewares');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, categoriesValidation, categoriesControllers.newCategory);
router.get('/', validateJWT, categoriesControllers.getAll);

module.exports = router;