const loginRoutes = require('express').Router();
const rescue = require('express-rescue');

const isValid = require('../validations/loginValidations');

const loginController = require('../controllers/loginController');

loginRoutes.post('/', isValid.isValidLogin, rescue(loginController.login));

module.exports = loginRoutes;
