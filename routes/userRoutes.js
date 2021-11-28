const express = require('express');

const { userValidation } = require('../validations');

const { createUser } = require('../controllers/userController');

require('dotenv').config();

const userRouter = express.Router();

userRouter.post('/', userValidation, createUser);

module.exports = userRouter;