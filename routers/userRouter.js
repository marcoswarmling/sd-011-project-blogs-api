const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', 
userController.validateDisplayName,
userController.validateEmail,
userController.validatePass,
userController.validateUser,
userController.addUser);

router.get('/',
userController.validateToken,
userController.getAllUsers);

router.get('/:id',
userController.validateToken,
userController.getUserById);

module.exports = router;