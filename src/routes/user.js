const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const middlewaresUser = require('../middlewares/middlewaresUser');
const { token } = require('../middlewares/token');

router.post('/user', middlewaresUser.verifyUserFields, controllerUser.createUser);
router.get('/user', token, controllerUser.allUsers);
router.get('/user/:id', token, controllerUser.allUsers);
router.post('/login', middlewaresUser.verifyLoginFields, controllerUser.loginUser);

module.exports = router;
