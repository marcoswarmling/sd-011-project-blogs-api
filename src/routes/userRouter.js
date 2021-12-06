const express = require('express');

const userController = require('../controllers/userController');

const userValidator = require('../middlewares/validations/userValidator');
const authValidator = require('../middlewares/validations/authValidator');

const userRouter = express.Router();

userRouter.get('/', authValidator, userController.getAll);

userRouter.get('/:id', authValidator, userController.getById);

userRouter.post('/', userValidator, userController.create);

module.exports = userRouter;