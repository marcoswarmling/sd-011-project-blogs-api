const userRouter = require('express').Router();

const { createUser } = require('../controllers/userController');

userRouter.post('/', createUser);

module.exports = userRouter;