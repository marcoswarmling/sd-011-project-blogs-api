const router = require('express').Router();
const { 
  nameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidation');

const {
  emailFieldValidator,
  passwordFieldValidator,
} = require('../middlewares/loginValidation');

const {
  createUser,
  login,
} = require('../controllers/userController');

router.post('/user', nameValidator, emailValidator, passwordValidator, createUser);

router.post(
  '/login',
  emailValidator,
  passwordValidator,
  emailFieldValidator,
  passwordFieldValidator,
  login,
  );

module.exports = router;