const router = require('express').Router();
const UserController = require('../controllers/userController');
const Validations = require('../middlewares/index');

router.get('/:id', Validations.validateJWT, UserController.getOneUser);

router.get('/', Validations.validateJWT, UserController.getAllUsers);

router.post('/', Validations.registerUserValidation, UserController.signUpUser);

router.delete('/me', Validations.validateJWT, UserController.deleteOwnUser);

module.exports = router;