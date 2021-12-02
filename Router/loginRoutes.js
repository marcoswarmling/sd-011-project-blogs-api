const router = require('express').Router();
const { checkEmail, checkPassword, checkUser } = require('../Controllers/login');

router.post('/', checkEmail, checkPassword, checkUser);

module.exports = router;