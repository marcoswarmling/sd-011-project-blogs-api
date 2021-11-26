const router = require('express').Router();
const userController = require('../controller/user');
const { verifyToken } = require('../middleware/token');

router.post('/', userController.createNewUser);

router.use(verifyToken);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;