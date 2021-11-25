const loginRouter = require('express').Router();

const { loginUser } = require('../controllers/loginController');
const { loginDataValidate, checkLoginCredentials } = require('../middlewares/loginValidations');

loginRouter.post(
  '/',
  loginDataValidate,
  checkLoginCredentials,
  loginUser,
);

module.exports = loginRouter;