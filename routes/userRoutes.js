const express = require('express');

const { userValidation } = require('../validations');

const { createUser, listUsers } = require('../controllers/userController');

require('dotenv').config();

const userRouter = express.Router();

userRouter.post('/', userValidation, createUser);
userRouter.get('/', listUsers);

module.exports = userRouter;