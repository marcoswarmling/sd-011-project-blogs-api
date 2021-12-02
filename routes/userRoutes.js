const routes = require('express').Router();
const controllerUser = require('../controller/userController');
const userValidations = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenExists');

routes.post('/',
userValidations.userValidation,
userValidations.userPasswordValidations,
userValidations.userEmailValidation,
controllerUser.controllerUserInsert);

routes.get('/',
tokenValidation.tokenExists,
controllerUser.controllerFindAll);

routes.get('/:id',
tokenValidation.tokenExists,
controllerUser.controllerFindId);

module.exports = routes;