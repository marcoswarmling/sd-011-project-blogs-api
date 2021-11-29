const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');

router.post('/', userValidation, userController.createUser);
// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getById);

module.exports = router;