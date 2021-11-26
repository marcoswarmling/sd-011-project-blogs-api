const express = require('express');

const { createUserFields } = require('../middlewares');
const { createUser } = require('../controllers/userController');

require('dotenv').config();

const router = express.Router();

router.post('/', createUserFields, createUser);

module.exports = router;