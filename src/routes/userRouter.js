const router = require('express').Router();
const userController = require('../controllers/userController');
const validations = require('../middleware/validations');

router.post('/user', validations.registerValidate, userController.register);
router.post('/login', validations.loginValidate, userController.login);

module.exports = router;