const express = require('express');

const { loginUserFields } = require('../middlewares');
const { login } = require('../controllers/userController');

require('dotenv').config();

const router = express.Router();

router.post('/', loginUserFields, login);

module.exports = router;