const router = require('express').Router();
const loginController = require('../controller/LoginController');

const {
  isValidEmail,
  isValidPassword,
  isValidLogin,
} = require('../validations/loginValidations');

const validations = [isValidEmail, isValidPassword, isValidLogin];

router.post('/', validations, loginController);

module.exports = router;
