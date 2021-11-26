const router = require('express').Router();
const userController = require('../src/controller/user');
const { verifyToken } = require('../src/middleware/token');

router.post('/', userController.createNewUser);
router.get('/', verifyToken, userController.getAllUser);

module.exports = router;