const router = require('express').Router();
const userController = require('../controllers/userController');
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

module.exports = router;
