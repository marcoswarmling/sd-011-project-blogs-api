const userRoutes = require('express').Router();
const controller = require('../controllers/userController');
const validateToken = require('../auth/validateToken');
const { validateUser } = require('../validations/validateBody');

userRoutes
  .get('/', validateToken, controller.getUsers)
  .post('/', validateUser, controller.createUser);

module.exports = userRoutes;
