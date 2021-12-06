const express = require('express');
const newUserMW = require('../middlewares/validateNewUser');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post('/',
  newUserMW.verifyUser,
  newUserMW.verifyRegister,
  UserController.create);

route.get('/',
  UserController.listAll);

route.get('/:id',
  UserController.findById);

module.exports = route;
