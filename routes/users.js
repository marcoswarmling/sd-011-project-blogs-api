const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

routes.post('/user',
  middlewares.validateUserWithJoi,
  middlewares.validateRegistereduser,
  controllers.createUser);

routes.post('/login',
  middlewares.validateLoginWithJoi,
  controllers.loginUser);

module.exports = routes;
