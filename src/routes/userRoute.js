const userRoute = require('express').Router();
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');

userRoute.post('/', userController.addUser);
userRoute.get('/', checkToken, userController.getAllUsers);

module.exports = userRoute;