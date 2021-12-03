const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoriesRouter = require('./categoriesRouter');
const postRouter = require('./postRouter');

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);

rootRouter.use('/login', loginRouter);

rootRouter.use('/categories', categoriesRouter);

rootRouter.use('/post', postRouter);

module.exports = rootRouter;