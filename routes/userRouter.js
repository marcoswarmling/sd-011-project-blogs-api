const userRoutes = require('express').Router();
const controller = require('../controllers/userController');

userRoutes.post('/', controller.createUser);

module.exports = userRoutes;
