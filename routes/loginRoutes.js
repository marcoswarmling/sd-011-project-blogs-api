const router = require('express').Router();
const loginController = require('../controller/loginController');
const { loginValidations, userEmailVerify } = require('../validations/loginValidations');

router.post('/login', loginValidations, userEmailVerify, loginController.userLogin);

module.exports = router;