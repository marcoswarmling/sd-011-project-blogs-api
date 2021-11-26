const loginRoute = require('express').Router();
const loginController = require('../controllers/loginController.js');

loginRoute.post('/', loginController.login);

module.exports = loginRoute;