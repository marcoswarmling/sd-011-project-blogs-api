const router = require('express').Router();
const rescue = require('express-rescue');

const usersController = require('../controllers/UsersControllers');

const middleware = require('../middlewares/validates');

router.post('/', middleware.validateUser, rescue(usersController.createUser));

router.get('/:id', middleware.userIsThere, rescue(usersController.getUserbyId));
router.get('/', middleware.validateToken, rescue(usersController.getAllUsers));

module.exports = router;
