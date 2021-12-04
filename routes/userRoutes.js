const express = require('express');
const userController = require('../controllers/User');
const verifiesIfUserExists = require('../middlewares/verifiesIfUserExists');
const validateUserRegistration = require('../middlewares/validateUserRegistration');

const router = express.Router();

router.post('/', validateUserRegistration, verifiesIfUserExists, userController.createNewUser);

module.exports = router;