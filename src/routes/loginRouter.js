const route = require('express').Router();

const LoginValidate = require('../middlewares/checkLoginData');
const UserController = require('../controller/userController');

route.post('/', LoginValidate.checkLogin, UserController.connectUser);

module.exports = route;