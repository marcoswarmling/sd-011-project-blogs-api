const userRouter = require('express').Router();

const { createUser } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');

userRouter.post('/', validateUser, createUser);

module.exports = userRouter;