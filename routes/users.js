const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares/users');

routes.post('/',
  middlewares.displayNameValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  middlewares.requiredPassword);

module.exports = routes;
