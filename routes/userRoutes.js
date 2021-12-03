const router = require('express').Router();
const UserController = require('../controllers/userController');
const validate = require('../midllewares/index');

router.get('/:id', validate.jwtValidation, UserController.getOneUser);

router.get('/', validate.jwtValidation, UserController.getAllUsers);

router.post('/', validate.UserRegisterValidation, UserController.createUser);

module.exports = router;
