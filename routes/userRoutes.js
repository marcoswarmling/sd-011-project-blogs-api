const Router = require('express').Router();
const { validateJWT } = require('../middlewares/tokenManager');

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
Router.get('/', validateJWT, getAllUsers);
Router.get('/:id', validateJWT, getUserById);

module.exports = Router;
