const router = require('express').Router();
const controllerUser = require('../controllers/user');
const controllerCategory = require('../controllers/category');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

router.post('/user', validateUser.verifyUserFields, controllerUser.createUser);
router.post('/login', validateUser.verifyLoginFields, controllerUser.loginUser);
router.post('/categories',
  validateToken,
  validateCategory.verifyFields,
  controllerCategory.createCategories);
router.get('/user', validateToken, controllerUser.getAllUsers);
router.get('/user/:id', validateToken, controllerUser.getUserById);
router.get('/categories', validateToken, controllerCategory.getAllCategories);

module.exports = router;