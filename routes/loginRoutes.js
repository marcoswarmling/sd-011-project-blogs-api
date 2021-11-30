const routes = require('express').Router();
const userLoginValidations = require('../middlewares/loginValidations');
const userController = require('../controller/userController');

routes.post('/',
userLoginValidations.userPasswordRequired,
userLoginValidations.userPasswordEmpty,
userLoginValidations.userEmailEmpty,
userLoginValidations.userEmailRequired,
userController.controllerFindUser);

module.exports = routes;