const router = require('express').Router();
const rescue = require('express-rescue');

const loginControllers = require('../controllers/loginControllers');

const middleware = require('../middlewares/validateUsers');

// router.post('/', middleware.validateUser, rescue(usersController.createUser));
router.post('/', middleware.loginIsValid, rescue(loginControllers.createLogin));

module.exports = router;
