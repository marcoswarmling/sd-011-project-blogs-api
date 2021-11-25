const userRoutes = require('express').Router();

const UserControllers = require('../controllers/UserControllers');

const validateToken = require('../middlewares/validateToken');

userRoutes.get('/', validateToken, UserControllers.index);
userRoutes.get('/:id', validateToken, UserControllers.getUserById);
userRoutes.post('/', UserControllers.create);

module.exports = userRoutes;
