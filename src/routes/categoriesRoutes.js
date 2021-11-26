const router = require('express').Router();
const { verifyNameFieldExists, validateUserJwt } = require('../middlewares/categoriesMiddlewares');
const { postCategories } = require('../controllers/categoriesController');

router.post('/', verifyNameFieldExists, validateUserJwt, postCategories);

module.exports = router;