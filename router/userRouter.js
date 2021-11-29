const router = require('express').Router();
const userController = require('../controller/UserController');
const {
  isDisplayNameValid,
  isEmailValid,
  isPasswordValid,
  checkIfEmailIsRegistered,
} = require('../validations/usersValidations');

const validations = [isDisplayNameValid, isEmailValid, isPasswordValid, checkIfEmailIsRegistered];

router.get('/', userController.getAllUsers);

router.post('/', validations, userController.createUser);

module.exports = router;
