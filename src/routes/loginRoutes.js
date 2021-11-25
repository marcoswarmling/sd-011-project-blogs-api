const loginRoutes = require('express').Router();

const LoginControllers = require('../controllers/LoginControllers');

loginRoutes.post('/', LoginControllers.logIn);

module.exports = loginRoutes;
