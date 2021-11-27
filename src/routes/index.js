const router = require('express').Router();
const controllerUser = require('../controllers/user');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

router.post('/user', validateUser.verifyUserFields, controllerUser.createUser);
router.post('/login', validateUser.verifyLoginFields, controllerUser.loginUser);
router.get('/user', validateToken, controllerUser.getAllUsers);
router.get('/user/:id', validateToken, controllerUser.getUserById);

module.exports = router;