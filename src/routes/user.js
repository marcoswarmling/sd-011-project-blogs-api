const express = require('express');

const Route = express.Router();

const UserController = require('../controllers/User');

Route.route('/')
  .get(UserController.listAll)
  .post(UserController.create);

Route.route('/:id')
  .get(UserController.findById);

module.exports = Route;
