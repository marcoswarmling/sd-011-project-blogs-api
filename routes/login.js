const router = require('express').Router();
const LoginController = require('../controllers/LoginController');
const { 
  emailValidation,
  passwordValidation,
  loginValidation } = require('../middlewares/loginValidations');

const validations = [emailValidation, passwordValidation, loginValidation];

router.post('/', validations, LoginController.login);

module.exports = router;
