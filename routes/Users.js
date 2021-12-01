const express = require('express');

const { User } = require('../controllers');
const { validateNewUser, validateLogin } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/user', validateNewUser, User.createUser);
router.post('/login', validateLogin, User.login);

module.exports = router;