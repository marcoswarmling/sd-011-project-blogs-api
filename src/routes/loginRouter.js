const express = require('express');
const loginController = require('../controllers/loginController');

const loginValidations = require('../middlewares/validations/login/loginValidations');

const userRouter = express.Router();

userRouter.post('/', loginValidations, loginController.login);

module.exports = userRouter;