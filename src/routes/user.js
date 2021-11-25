const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const middlewaresUser = require('../middlewares/middlewaresUser');

router.post('/user', middlewaresUser.verifyUserFields, controllerUser.createUser);
router.post('/login', middlewaresUser.verifyLoginFields, controllerUser.loginUser);

module.exports = router;
