const router = require('express').Router();
const UserController = require('../controllers/userController');
const Validations = require('../middlewares/index');

router.post('/', Validations.registerUserValidation, UserController.signUpUser);

module.exports = router;