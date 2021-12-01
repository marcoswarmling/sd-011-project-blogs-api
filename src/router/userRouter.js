const router = require('express').Router();
const userController = require('../controllers/userController');
const validationError = require('../middlewares/validationError');

router.post('/', validationError, userController.createUser);
// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getById);

module.exports = router;