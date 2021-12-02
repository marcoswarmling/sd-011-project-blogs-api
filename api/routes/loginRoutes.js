const router = require('express').Router();
const rescue = require('express-rescue');

const loginControllers = require('../controllers/loginControllers');

const middleware = require('../middlewares/validates');

router.post('/', middleware.loginIsValid, rescue(loginControllers.createLogin));

module.exports = router;
