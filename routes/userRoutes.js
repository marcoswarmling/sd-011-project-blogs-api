const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/user', controller.userRegister);

module.exports = router;
