const userRouter = require('express').Router();

const { createUser } = require('../controllers/userController');
const { userDataValidation, checkRepeatedEmail } = require('../middlewares/userValidations');

userRouter.post(
  '/', 
  userDataValidation,
  checkRepeatedEmail,
  createUser,
);

module.exports = userRouter;