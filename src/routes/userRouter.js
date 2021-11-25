const express = require('express');

const router = express.Router();
const { emailExists, userAuthentication } = require('../middleware/userMiddleware');
const userController = require('../controller/userController');

router.post('/', userAuthentication, emailExists, userController.createUser);

module.exports = router;