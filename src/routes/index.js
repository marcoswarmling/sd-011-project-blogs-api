const router = require('express').Router();
const controllerUser = require('../controllers/user');
const validateUser = require('../middlewares/validateUser');

router.post('/user', validateUser.verifyUserFields, controllerUser.createUser);
router.post('/login', validateUser.verifyLoginFields, controllerUser.loginUser);

module.exports = router;