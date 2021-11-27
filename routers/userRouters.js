const express = require('express');

const router = express.Router();

const { create } = require('../controllers/userControllers');
const { isValidDisplayName, isValidEmail, isValidPassword } = require('../middlewares/validations');

router.post('/',
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  create);

module.exports = router;