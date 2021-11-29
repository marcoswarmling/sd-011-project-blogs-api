const express = require('express');
const newUserMiddleware = require('../middlewares/validateNewUser');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post(
  '/',
  newUserMiddleware.validateCreateUserBody,
  newUserMiddleware.validateRegistereduser,
  UserController.create,
);

module.exports = route;
