const Router = require('express').Router();
const { login } = require('../controllers/loginController');
const { generateToken } = require('../middlewares/tokenManager');
const { emailValidate, passwordValidate } = require('../middlewares/loginValidation');

Router.post('/',
  emailValidate,
  passwordValidate,
  login,
  generateToken);

module.exports = Router;