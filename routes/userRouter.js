const router = require('express').Router();
const userValidate = require('../services/userValidate');

const userController = require('../controllers/userController');

router.post('/user', userValidate.verifyUserSchema, userController.createUser);
router.post('/login', userValidate.verifyLoginSchema, userController.userLogin);

module.exports = router;
