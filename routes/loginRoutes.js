const routes = require('express').Router();
const loginValid = require('../middlewares/loginValidations');
const userController = require('../controller/userController');

routes.post('/',
loginValid.userEmailRequired,
loginValid.userPasswordRequired,
userController.controllerFindUser);

module.exports = routes;