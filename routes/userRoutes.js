const Router = require('express').Router();
const { 
  validateDisplayName,
  validateEmail,
  validatePassword,
 } = require('../middlewares/userValidation');
const { create } = require('../controllers/userController');

Router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  create);

module.exports = Router;
