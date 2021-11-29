const express = require('express');

const Route = express.Router();

const LoginController = require('../controllers/Login');

Route.post('/', LoginController);

module.exports = Route;
