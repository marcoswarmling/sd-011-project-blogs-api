const router = require('express').Router();
const userController = require('../controller/userController');
const { existsEmail, userExists } = require('../middleware/user');

router.post('/user', userExists, existsEmail, userController.create);

module.exports = router; 