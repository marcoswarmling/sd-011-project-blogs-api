const router = require('express').Router();
const LoginController = require('../controllers/login.controller');
const validateLoginMiddleware = require('../middlewares/validateLogin.middleware');

router.post('/', validateLoginMiddleware, LoginController.logIn);

module.exports = router;