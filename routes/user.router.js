const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const validateCreateUserMiddleware = require('../middlewares/validateCreateUser.middleware');

router.post('/', validateCreateUserMiddleware, UserController.createUser);

module.exports = router;