const router = require('express').Router();
const userValidate = require('../services/userValidate');
const { tokenValidate } = require('../services/validateToken');

const userController = require('../controllers/userController');

router.post('/user', userValidate.verifyUserSchema, userController.createUser);
router.post('/login', userValidate.verifyLoginSchema, userController.userLogin);
router.get('/user', tokenValidate, userController.getAllUsers);
router.get('/user/:id', tokenValidate, userController.getUserById);

module.exports = router;
