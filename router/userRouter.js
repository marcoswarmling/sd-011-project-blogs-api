const router = require('express').Router();
const userController = require('../controller/UserController');
const {
  isDisplayNameValid,
  isEmailValid,
  isPasswordValid,
  checkIfEmailIsRegistered,
} = require('../validations/usersValidations');
const isTokenValid = require('../validations/tokenValidation');

const validations = [isDisplayNameValid, isEmailValid, isPasswordValid, checkIfEmailIsRegistered];

router.get('/', isTokenValid, userController.getAllUsers);

router.get('/:id', isTokenValid, userController.getUserById);

router.post('/', validations, userController.createUser);

module.exports = router;
