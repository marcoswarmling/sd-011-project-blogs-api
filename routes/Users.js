const express = require('express');

const { User } = require('../controllers');
const { validateUser } = require('../middlewares');

const router = express.Router();

router.post('/user', validateUser, User.createUser);

module.exports = router;