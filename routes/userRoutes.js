const userRouter = require('express').Router();

const { createUser, getAllUsersController } = require('../controllers/userController');
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

module.exports = userRouter;