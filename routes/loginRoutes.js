const express = require('express');

const userController = require('../controllers/User');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, userController.loginUser);

module.exports = router;