const route = require('express').Router();

const UserController = require('../controller/userController');

route.post('/', UserController.createUser);

module.exports = route;