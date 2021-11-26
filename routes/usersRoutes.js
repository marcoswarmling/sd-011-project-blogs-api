const routes = require('express').Router();
const usersControlers = require('../controllers/usersControlers');

const {
  isValidEmail,
  isValidPassword,
  existPassword,
  validationEmail,
  isValidName,
} = require('../middlewares/usersValidations');

routes.post(
  '/',
  isValidEmail,
  isValidPassword,
  existPassword,
  validationEmail,
  isValidName,
  usersControlers.addUser,
  );

module.exports = routes;