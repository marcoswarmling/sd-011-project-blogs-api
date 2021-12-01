const router = require('express').Router();
const usersController = require('../controllers/users');
const { userMiddleware } = require('../Middlewares/userMiddleware');

router.post('/', userMiddleware, usersController.createNewUser);

module.exports = router;