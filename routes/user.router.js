const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validateCreateUserMiddleware = require('../middlewares/validateCreateUser.middleware');

// GETS
router.get('/:id', authMiddleware, UserController.findUserById);
router.get('/', authMiddleware, UserController.findAllUsers);

// POSTS
router.post('/', validateCreateUserMiddleware, UserController.createUser);

module.exports = router;