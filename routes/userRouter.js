const userRoutes = require('express').Router();
const controller = require('../controllers/userController');
const { validateUser } = require('../validations/validateBody');

userRoutes.post('/', validateUser, controller.createUser);

module.exports = userRoutes;
