const router = require('express').Router();
const userController = require('../controller/user');
const { verifyToken } = require('../middleware/token');

router.post('/', userController.createNewUser);
router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUserById);

module.exports = router;