const router = require('express').Router();
const rescue = require('express-rescue');

const usersController = require('../controllers/UsersControllers');

const middleware = require('../middlewares/validateUsers');

router.post('/', middleware.validateUser, rescue(usersController.createUser));

module.exports = router;
