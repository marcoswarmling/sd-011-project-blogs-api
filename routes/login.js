const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares/users');
const controllers = require('../controllers/users');

routes.post('/',
  middlewares.validateLoginWithJoi,
  controllers.loginUser);

module.exports = routes;
