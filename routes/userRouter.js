const userRoutes = require('express').Router();
const rescue = require('express-rescue');

const isValid = require('../validations/userValidation');
const auth = require('../validations/authJWT');

const userController = require('../controllers/userController');

userRoutes.post(
  '/',
  isValid.isValidDisplayName,
  isValid.isValidPassword,
  isValid.isValidEmail,
  isValid.userExists,
  rescue(userController.createNewUser),
);

userRoutes.get('/', auth.validateJWT, rescue(userController.getAllUsers));

userRoutes.get('/:id', auth.validateJWT, rescue(userController.getUserByPk));

module.exports = userRoutes;
