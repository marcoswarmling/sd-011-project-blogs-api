const router = require('express').Router();
const LoginController = require('../controllers/loginController');
const Validations = require('../middlewares/index');

router.post('/', Validations.loginValidation, LoginController.signIn);

module.exports = router;