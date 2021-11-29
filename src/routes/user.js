const express = require('express');

const Route = express.Router();

const UserController = require('../controllers/User');

Route.post('/', UserController.create);

module.exports = Route;
