const router = require('express').Router();
const { verifyNameFieldExists, validateUserJwt } = require('../middlewares/categoriesMiddlewares');
const { postCategories, getAllCategories } = require('../controllers/categoriesController');

router.post('/', verifyNameFieldExists, validateUserJwt, postCategories);
router.get('/', validateUserJwt, getAllCategories);

module.exports = router;