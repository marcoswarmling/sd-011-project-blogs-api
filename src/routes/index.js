const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoriesRouter = require('./categoriesRouter');

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);

rootRouter.use('/login', loginRouter);

rootRouter.use('/categories', categoriesRouter);

module.exports = rootRouter;