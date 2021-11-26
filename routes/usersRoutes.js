const router = require('express').Router();
const usersController = require('../controller/usersController');
const { userValidations, userAlreadyExists } = require('../validations/usersValidations');

router.post('/user', userValidations, userAlreadyExists, usersController.createUser);

module.exports = router;