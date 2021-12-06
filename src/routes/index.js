const express = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const categoryRouter = require('./categoryRouter');
const postRouter = require('./postRouter');

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/login', loginRouter);
rootRouter.use('/categories', categoryRouter);
rootRouter.use('/post', postRouter);

module.exports = rootRouter;