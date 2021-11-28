const express = require('express');
const validateSchemas = require('../middlewares/validateSchemas');
const userSchema = require('../schemas/usersSchemas');
const validateUser = require('../middlewares/validateUser');
const userController = require('../controllers/userControllers');
const protect = require('../auth/protect');

const userRoutes = express.Router();

// / user;
userRoutes
  .route('/')
  .post(validateSchemas(userSchema), validateUser, userController.createUseController)
  .get(protect, userController.getAllUsersControllers);

// user/:id
userRoutes
  .route('/:id')
  .get(protect, userController.getByIdControllers);

module.exports = userRoutes;
