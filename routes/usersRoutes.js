const router = require('express').Router();
const usersController = require('../controller/usersController');
const { tokenValidation } = require('../validations/tokenValidation');
const { userValidations, userAlreadyExists } = require('../validations/usersValidations');

router.get('/user', tokenValidation, usersController.getAllUsers);
router.post('/user', userValidations, userAlreadyExists, usersController.createUser);

module.exports = router;