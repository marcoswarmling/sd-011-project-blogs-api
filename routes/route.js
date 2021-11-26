const route = require('express').Router();

const controllerUser = require('../src/controller/controllerUser');

const { 
  validDisplayName,
  validEmail,
  validPassword,
  checkEmail } = require('../src/middlewares/middlewareUser');

route.post('/user', validDisplayName, validEmail, validPassword, checkEmail, controllerUser.create);

module.exports = route;