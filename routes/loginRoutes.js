const router = require('express').Router();
const loginController = require('../controllers/loginController');

const {
  emailValidation,
  passwordValidation,
  loginValidation } = require('../Validations/loginValidations');

router.post('/',
  emailValidation,
  passwordValidation,
  loginValidation, loginController.loginUser);

module.exports = router;