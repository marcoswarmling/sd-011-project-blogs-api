const userRouter = require('express').Router();

const { createUser, getAllUsers } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');
const validateToken = require('../middlewares/authentication');

userRouter.post('/', validateUser, createUser);
userRouter.get('/', validateToken, getAllUsers);

module.exports = userRouter;