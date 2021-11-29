const routes = require('express').Router();
const controllerUser = require('../controller/userController');

routes.post('/', controllerUser.controllerUserInsert);

module.exports = routes;