const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/user', userController.register);

module.exports = router;