const router = require('express').Router();
const userController = require('../src/controller/user');

router.post('/', userController.createNewUser);

module.exports = router;