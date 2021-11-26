const route = require('express').Router();

const controllerUser = require('../src/controller/controllerUser');
const controllerLogin = require('../src/controller/controllerLogin');

const { 
  validDisplayName,
  validEmail,
  validPassword } = require('../src/middlewares/middlewareUser');

const {
  checkEmailLogin, 
  checkPasswordLogin } = require('../src/middlewares/middlewareLogin');

const { validToken } = require('../src/middlewares/middlewareToken');

route.get('/user', validToken, controllerUser.getAll);

route.post('/user', validDisplayName, validEmail, validPassword, controllerUser.create);

route.post('/login', checkEmailLogin, checkPasswordLogin, controllerLogin.login);

module.exports = route;