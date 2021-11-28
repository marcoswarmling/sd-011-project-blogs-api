const express = require('express');

const { loginValidation } = require('../validations');
const { login } = require('../controllers/loginController');

require('dotenv').config();

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, login);

module.exports = loginRouter;