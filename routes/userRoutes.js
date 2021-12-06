const Router = require('express').Router();
const { validateToken } = require('../middlewares/tokenManager');
const { 
  validateDisplayName,
  validateEmail,
  validatePassword,
 } = require('../middlewares/userValidation');
const { create, getAllUsers, getUserById } = require('../controllers/userController');

Router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  create);
Router.get('/', validateToken, getAllUsers);
Router.get('/:id', validateToken, getUserById);

module.exports = Router;
