const express = require('express');

const loginController = require('../controllers/loginController');

const loginValidations = require('../middlewares/validations/login/loginValidations');

const loginRouter = express.Router();

loginRouter.post('/', loginValidations, loginController.login);

module.exports = loginRouter;