const express = require('express');
const userController = require('../controllers/userController');

const userValidations = require('../middlewares/validations/user/userValidations');

const userRouter = express.Router();

userRouter.post('/', userValidations, userController.create);

module.exports = userRouter;