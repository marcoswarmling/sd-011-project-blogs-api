const express = require('express');
const { create, getAll } = require('../controllers/userController');

const userValidations = require('../middlewares/validations/user/userValidations');

const tokenValidation = require('../middlewares/validations/token/tokenValidation');

const userRouter = express.Router();

userRouter.post('/', userValidations, create);

userRouter.get('/', tokenValidation, getAll);

module.exports = userRouter;