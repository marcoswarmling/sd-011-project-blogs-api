const express = require('express');

const router = express.Router(); 
const { createLogin } = require('../controllers/loginController');
const { validatePasswordLogin } = require('../middlewares/validate');

router.post('/', validatePasswordLogin, createLogin);

module.exports = router;