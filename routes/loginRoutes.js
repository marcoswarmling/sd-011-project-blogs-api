const router = require('express').Router();
const loginController = require('../controller/loginController');
const { loginValidations } = require('../validations/loginValidations');

router.post('/login', loginValidations, loginController.userLogin);

module.exports = router;