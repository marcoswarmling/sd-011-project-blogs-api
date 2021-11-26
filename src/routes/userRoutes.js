const route = require('express').Router();

const UserController = require('../controller/userController');
const UserValidate = require('../middlewares/checkUserData');
const UserUnique = require('../middlewares/checkIfUniqueUser');
const TokenValidate = require('../middlewares/checkAuthenticatedUser');

route.post(
  '/',
  UserValidate.validateUserBodyData,
  UserUnique.checkUniqueUser,
  UserController.createUser,
  );

route.get('/', TokenValidate.checkAuthenticatedUser, UserController.getAllUsers);

module.exports = route;