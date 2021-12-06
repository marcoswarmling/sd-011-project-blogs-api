const router = require('express').Router();
const isValid = require('../validations/loginValidations');
const { login } = require('../controllers/loginController');

router.post('/', isValid.email, isValid.password, login);

module.exports = router;