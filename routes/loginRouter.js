const express = require('express');
const LoginController = require('../controllers/loginController');
const { LoginPostValidate } = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', LoginPostValidate, LoginController.create);

module.exports = router;