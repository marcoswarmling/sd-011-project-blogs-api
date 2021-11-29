const express = require('express');

const { userValidation } = require('../validations');

const { createUser, listUsers, getUserById } = require('../controllers/userController');

require('dotenv').config();

const userRouter = express.Router();

userRouter.post('/', userValidation, createUser);
userRouter.get('/', listUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;