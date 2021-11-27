const loginRoute = require('express').Router();
const loginController = require('../controllers/loginController.js');

loginRoute.post('/', loginController.loginUser);

module.exports = loginRoute;