const router = require('express').Router();
const validUser = require('../validation/userValidation');
const user = require('../controllers/userController');
const validEmail = require('../validation/emailValidation');

router.post('/user', validUser, validEmail, user.createNewUser);

module.exports = router;
