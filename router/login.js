const router = require('express').Router();
const controllerLogin = require('../controllers/loginController');
const { 
  emailValidation,
  passwordValidation,
  loginValidation } = require('../middlewares/loginValidations');

const validations = [emailValidation, passwordValidation, loginValidation];

router.post('/', validations, controllerLogin.login);

module.exports = router;