const router = require('express').Router();
const userValidate = require('../services/userValidate');

// const router = express.router();
const userController = require('../controllers/userController');

router.post('/user', userValidate.verifyUserSchema, userController.createUser);

module.exports = router;
