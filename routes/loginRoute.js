const express = require('express');
const LoginController = require('../controllers/loginController');

const route = express.Router();

route.post('/', LoginController.userLogin);

module.exports = route;
