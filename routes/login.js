const express = require('express');

const router = express.Router();
const { validateLogin } = require('../middlewares/validation');
const controllers = require('../controllers/usersController');

router.post('/', validateLogin, controllers.login);

module.exports = router;