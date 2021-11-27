const userRouter = require('express').Router();

const { createUser, getAllUsers } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');

userRouter.post('/', validateUser, createUser);
userRouter.get('/', getAllUsers);

module.exports = userRouter;