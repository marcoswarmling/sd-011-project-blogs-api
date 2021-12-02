const userRoute = require('express').Router();
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');

userRoute.post('/', userController.addUser);
userRoute.get('/', checkToken, userController.getAllUsers);
userRoute.get('/:id', checkToken, userController.getUserById);
userRoute.delete('/me', checkToken, userController.deleteMe);

module.exports = userRoute;