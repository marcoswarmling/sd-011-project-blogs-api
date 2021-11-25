const userRoutes = require('express').Router();

const UserControllers = require('../controllers/UserControllers');

userRoutes.post('/', UserControllers.create);

module.exports = userRoutes;
