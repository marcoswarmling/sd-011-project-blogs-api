const route = require('express').Router();

const UserController = require('../controller/userController');
const UserValidate = require('../middlewares/checkUserData');
const UserUnique = require('../middlewares/checkIfUniqueUser');

route.post(
  '/', UserUnique.checkUniqueUser, UserValidate.validateUserBodyData, UserController.createUser,
  );

module.exports = route;