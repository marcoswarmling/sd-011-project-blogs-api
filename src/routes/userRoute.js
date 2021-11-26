const userRoute = require('express').Router();
const userController = require('../controllers/userController');

userRoute.post('/', userController.addUser);

module.exports = userRoute;