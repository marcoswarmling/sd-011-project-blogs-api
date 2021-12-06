const express = require('express');
const newUserMW = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post(
  '/',
  newUserMW.verifyUser,
  newUserMW.verifyRegister,
  UserController.create,
);

route.get(
  '/',
  validateToken,
  UserController.listAll,
);

route.get(
  '/:id',
  validateToken,
  UserController.findById,
);

module.exports = route;
