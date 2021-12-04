const express = require('express');
const userController = require('../controllers/Users');
const validationLogin = require('../validationLogin');

const router = express.Router();

router.post('/', validationLogin, userController.login);

module.exports = router;