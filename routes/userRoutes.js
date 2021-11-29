const express = require('express');
const { createUsers } = require('../controllers/userController');
const { validateDisplayName, validateEmail, validatePassword } = require('../middlewares/validate');

const router = express.Router(); 

router.post('/', validateDisplayName, validateEmail, validatePassword, createUsers);

module.exports = router;