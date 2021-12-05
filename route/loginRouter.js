const { Router } = require('express');
const userController = require('../controllers/userController');
const { validaLogin } = require('../validations/loginValidate');

const router = Router();

router.post('/', validaLogin, userController.login);

module.exports = router;
