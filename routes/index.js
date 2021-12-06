const router = require('express').Router();
const userController = require('../controllers/userController');
const categoriesController = require('../controllers/categoriesController');
const postsController = require('../controllers/postsController');
const userValidate = require('../middlewares/userValidate');

router.post('/user',
  userValidate.validateName,
  userValidate.validateEmail,
  userValidate.validatePassword,
  userController.createUser);

router.post('/login', 
  userValidate.validateEmail,
  userValidate.validatePassword,
  userController.userLogin);

router.get('/user',
  userValidate.validateToken,
  userController.getAll);

router.get('/user/:id', 
  userValidate.validateToken,
  userController.getById);

router.post('/categories',
  userValidate.validateToken,
  categoriesController.createCategory);

router.get('/categories',
  userValidate.validateToken,
  categoriesController.getAll);

router.get('/post',
  userValidate.validateToken,
  postsController.getAll);

module.exports = router;
