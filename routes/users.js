const router = require('express').Router();
const usersController = require('../controllers/users');

router.post('/', usersController.create);

module.exports = router;