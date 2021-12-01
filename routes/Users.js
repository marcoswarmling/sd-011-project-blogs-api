const express = require('express');

const { User } = require('../controllers');
const { validateNewUser, validateLogin } = require('../middlewares/validateUser');
const { validateToken } = require('../middlewares');

const router = express.Router();

router.post('/user', validateNewUser, User.createUser);
router.get('/user', validateToken, User.getAllUsers);
router.post('/login', validateLogin, User.login);

module.exports = router;