const express = require('express');
const { auth } = require('../middlewares/auth');
const { createUsers, getById, getAllUsers } = require('../controllers/userController');
const { validateDisplayName, validateEmail, validatePassword } = require('../middlewares/validate');

const router = express.Router(); 
router.get('/', auth, getAllUsers);
router.get('/:id', auth, getById);
router.post('/', validateDisplayName, validateEmail, validatePassword, createUsers);

module.exports = router;