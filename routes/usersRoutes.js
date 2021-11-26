const routes = require('express').Router();
const usersControlers = require('../controllers/usersControlers');

const {
  isValidDisplayName,
  isValidEmail,
  existPassword,
  validationEmail,
  charactersOfPassword,
} = require('../middlewares/usersValidations');

routes.post(
  '/',
  isValidDisplayName,
  isValidEmail,
  existPassword,
  charactersOfPassword,
  validationEmail,
  usersControlers.addUser,
  );

module.exports = routes;