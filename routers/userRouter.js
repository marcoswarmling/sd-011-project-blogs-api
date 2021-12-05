const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', 
userController.validateDisplayName,
userController.validateEmail,
userController.validatePass,
userController.validateUser,
userController.addUser);

module.exports = router;