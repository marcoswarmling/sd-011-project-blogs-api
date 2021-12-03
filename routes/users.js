const express = require('express');

const routes = express.Router();

const tokenMiddleware = require('../middlewares/token');
const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

routes
  .post('/',
    middlewares.validateUserWithJoi,
    middlewares.validateRegistereduser,
    controllers.createUser)
  .get('/',
    tokenMiddleware,
    controllers.getAllUsers);

module.exports = routes;
