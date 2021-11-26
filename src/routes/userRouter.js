const express = require('express');

const userController = require('../controllers/userController');

const userValidator = require('../middlewares/validations/user/userValidator');
const authValidator = require('../middlewares/validations/auth/authValidator');

const userRouter = express.Router();

userRouter.post('/', userValidator, userController.create);
userRouter.get('/', authValidator, userController.getAll);
userRouter.get('/:id', authValidator, userController.getById);

module.exports = userRouter;
