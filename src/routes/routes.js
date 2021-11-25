const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const controllerCategories = require('../controllers/controllerCategories');
const middlewaresUser = require('../middlewares/middlewaresUser');
const middlewaresCategories = require('../middlewares/middlewaresCategories');
const { token } = require('../middlewares/token');

// users
router.post('/user', middlewaresUser.verifyUserFields, controllerUser.createUser);
router.get('/user', token, controllerUser.allUsers);
router.get('/user/:id', token, controllerUser.getById);
router.post('/login', middlewaresUser.verifyLoginFields, controllerUser.loginUser);

// categories
router.post('/categories',
  token,
  middlewaresCategories.verifyFields,
  controllerCategories.createCategories);

module.exports = router;
