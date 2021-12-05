const router = require('express').Router();
const { usersController } = require('../controllers');

router.post('/', usersController.createUser);

module.exports = router;
