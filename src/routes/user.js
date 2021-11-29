const express = require('express');

const Route = express.Router();

const UserController = require('../controllers/User');

Route.route('/')
  .get(UserController.listAll)
  .post(UserController.create);

module.exports = Route;
