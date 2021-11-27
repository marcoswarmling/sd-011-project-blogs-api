const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');
const { create, getUsers } = require('../controllers/userControllers');
const { isValidDisplayName, isValidEmail, isValidPassword } = require('../middlewares/validations');

router.get('/',
  auth,
  getUsers);

router.post('/',
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  create);

module.exports = router;