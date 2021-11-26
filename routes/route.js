const route = require('express').Router();

const controllerUser = require('../src/controller/controllerUser');
const controllerLogin = require('../src/controller/controllerLogin');
const controllerCategory = require('../src/controller/controllerCategory');

const { 
  validDisplayName,
  validEmail,
  validPassword } = require('../src/middlewares/middlewareUser');

const {
  checkEmailLogin, 
  checkPasswordLogin } = require('../src/middlewares/middlewareLogin');

const { validToken } = require('../src/middlewares/middlewareToken');

const { validName } = require('../src/middlewares/middlewareCategory');

route.get('/user', validToken, controllerUser.getAll);

route.get('/user/:id', validToken, controllerUser.getById);

route.post('/user', validDisplayName, validEmail, validPassword, controllerUser.create);

route.post('/login', checkEmailLogin, checkPasswordLogin, controllerLogin.login);

route.post('/categories', validName, validToken, controllerCategory.create);

module.exports = route;