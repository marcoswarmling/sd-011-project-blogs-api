const userRouter = require('express').Router();

const { createUser, getAllUsers, getUserById, deleteUser,
 } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');
const autenticateToken = require('../middlewares/authentication');

userRouter.post('/', validateUser, createUser);
userRouter.get('/', autenticateToken, getAllUsers);
userRouter.get('/:id', autenticateToken, getUserById);
userRouter.delete('/me', autenticateToken, deleteUser);

module.exports = userRouter;