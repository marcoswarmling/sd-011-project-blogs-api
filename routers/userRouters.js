const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');
const { create, getUsers, getUserById } = require('../controllers/userControllers');
const { isValidDisplayName, isValidEmail, isValidPassword } = require('../middlewares/validations');

router.get('/',
  auth,
  getUsers);

router.get('/:id',
  auth,
  getUserById);

router.post('/',
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  create);

module.exports = router;