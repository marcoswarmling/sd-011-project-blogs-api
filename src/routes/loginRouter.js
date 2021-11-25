const express = require('express');

const router = express.Router();

const { loginAuthentication, userExistsInDb } = require('../middleware/loginMiddleware');

const loginController = require('../controller/loginController');

router.post('/', loginAuthentication, userExistsInDb, loginController.login);

module.exports = router;