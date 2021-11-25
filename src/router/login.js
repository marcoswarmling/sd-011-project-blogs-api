const router = require('express').Router();
const validLogin = require('../validation/loginValidation');
const { loginUser } = require('../controllers/loginController');

router.post('/login', validLogin, loginUser);

module.exports = router;
