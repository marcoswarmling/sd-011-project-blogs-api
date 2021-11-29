const router = require('express').Router();
const loginController = require('../controller/loginController');
const { authentication, existsUser } = require('../middleware/login');

router.post('/login', authentication, existsUser, loginController.login);

module.exports = router; 