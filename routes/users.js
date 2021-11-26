const router = require('express').Router();
const usersController = require('../controllers/users');

router.post('/', usersController.createNewUser);
router.get('/', usersController.findAllUsers);

module.exports = router;