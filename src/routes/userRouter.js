const router = require('express').Router();
const userController = require('../controllers/userController');
const validations = require('../middleware/validations');

router.post('/user', validations.registerValidate, userController.register);

module.exports = router;