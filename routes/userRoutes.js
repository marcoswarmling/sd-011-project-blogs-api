const express = require('express');
const userController = require('../controllers/User');
const validateUserRegistration = require('../middlewares/validateUserRegistration');

const router = express.Router();

router.post('/', validateUserRegistration, userController.createNewUser);

module.exports = router;