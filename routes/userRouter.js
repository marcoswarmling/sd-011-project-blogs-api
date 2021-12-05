const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidations = require('../validations/userValidations');

router.post('/', userValidations, userController.addUser);

module.exports = router;