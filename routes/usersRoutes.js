const routes = require('express').Router();
const usersControlers = require('../controllers/usersControlers');

const {
  isValidDisplayName,
  isValidEmail,
  existPassword,
  validationEmail,
  charactersOfPassword,
} = require('../middlewares/usersValidations');

const {
  isValidToken,
} = require('../middlewares/jwtvalidation');

routes.post(
  '/',
  isValidDisplayName,
  isValidEmail,
  existPassword,
  charactersOfPassword,
  validationEmail,
  usersControlers.addUser,
  );

routes.get('/', isValidToken, usersControlers.getUsers);

routes.get('/:id', isValidToken, usersControlers.getById);

module.exports = routes;