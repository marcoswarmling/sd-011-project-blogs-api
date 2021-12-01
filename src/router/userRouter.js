const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidationError = require('../middlewares/userValidationError');

router.post('/', userValidationError, userController.createUser);
// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getById);

module.exports = router;