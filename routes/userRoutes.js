const express = require('express');
const newUserMiddleware = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post(
  '/',
  newUserMiddleware.validateCreateUserBody,
  newUserMiddleware.validateRegistereduser,
  UserController.create,
);

route.get(
  '/',
  validateToken,
  UserController.listAll,
);

module.exports = route;
