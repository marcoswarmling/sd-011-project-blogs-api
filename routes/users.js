const router = require('express').Router();
const usersController = require('../controllers/users');
const { userMiddleware } = require('../Middlewares/userMiddleware');

router.post('/', userMiddleware, usersController.createNewUser);
router.get('/', usersController.findAllUsers);

module.exports = router;