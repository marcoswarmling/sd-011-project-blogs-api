const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

routes.post('/',
  middlewares.displayNameValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  middlewares.requiredPassword,
  controllers.createUser);

module.exports = routes;
