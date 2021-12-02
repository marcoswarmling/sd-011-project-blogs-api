const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

routes.post('/',
  middlewares.validateUserWithJoi,
  middlewares.validateRegistereduser,
  controllers.createUser,
  () => console.log('Cheguei aqui'));

module.exports = routes;
