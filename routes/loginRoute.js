const router = require('express').Router();
const isValid = require('../validations/loginValidations');
const { login } = require('../controllers/loginController');

router.post('/', isValid.email, isValid.password, login);
// lembrete: colocar isValid.login quando corrigir erro

module.exports = router;