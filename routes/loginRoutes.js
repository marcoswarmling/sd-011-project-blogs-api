const routes = require('express').Router();
const loginControlers = require('../controllers/loginControlers');

const {
  isValidEmail,
  ifEmailisNull,
  existPassword,
  validationEmail,
  charactersOfPassword,
  // isValidToken,
  // authorization,
} = require('../middlewares/jwtvalidation');

routes.post(
  '/',
  ifEmailisNull,
  isValidEmail,
  validationEmail,
  charactersOfPassword,
  existPassword,
  // isValidToken,
  // authorization,
  loginControlers.login,
  );

module.exports = routes;