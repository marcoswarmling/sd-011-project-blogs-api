const router = require('express').Router();
const usersController = require('../controllers/users');
const { userMiddleware } = require('../Middlewares/userMiddleware');
const { validateToken } = require('../Middlewares/authorizations');

router.post('/', userMiddleware, usersController.createNewUser);
router.get('/', validateToken, usersController.findAllUsers);
router.get('/:id', validateToken, usersController.getUserById);
router.delete('/me', validateToken, usersController.deleteMe);

module.exports = router;