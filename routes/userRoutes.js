const router = require('express').Router();
const UserController = require('../controllers/userController');
const validate = require('../midllewares/index');

router.post('/', validate.UserRegisterValidation, UserController.createUser);

module.exports = router;
