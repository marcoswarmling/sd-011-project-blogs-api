const userRouter = require('express').Router();

const { 
  createUser, 
  getAllUsersController, 
  getUserByIdController,
} = require('../controllers/userController');

const { 
  userDataValidation, 
  checkRepeatedEmail, 
  checkValidToken,
} = require('../middlewares/userValidations');

userRouter.post(
  '/', 
  userDataValidation,
  checkRepeatedEmail,
  createUser,
);

userRouter.get(
  '/',
  checkValidToken,
  getAllUsersController,
);

userRouter.get(
  '/:id',
  checkValidToken,
  getUserByIdController,
);

module.exports = userRouter;