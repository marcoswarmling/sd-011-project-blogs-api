const router = require('express').Router();
const userController = require('../controller/userController');
const { existsEmail, userExists, authorizationToken } = require('../middleware/user');

router.post('/user', userExists, existsEmail, userController.create);
router.get('/user', authorizationToken, userController.getAll);
router.get('/user/:id', authorizationToken, userController.getAllId);

module.exports = router; 