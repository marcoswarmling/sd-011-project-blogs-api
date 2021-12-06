const express = require('express');

const loginController = require('../controllers/loginController');

const loginValidator = require('../middlewares/validations/loginValitator');

const loginRouter = express.Router();

loginRouter.post('/', loginValidator, loginController.signin);

module.exports = loginRouter;