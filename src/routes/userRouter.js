const express = require('express');

const userController = require('../controllers/userController');

const userValidator = require('../middlewares/validations/user/userValidator');

const userRouter = express.Router();

userRouter.post('/', userValidator, userController.create);
userRouter.get('/', userController.getAll);

module.exports = userRouter;