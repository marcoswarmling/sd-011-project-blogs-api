const router = require('express').Router();
const LoginController = require('../controllers/loginController');
const validate = require('../midllewares/index');

router.post('/', validate.LoginValidation, LoginController.signIn);

module.exports = router;
