const express = require('express');

const { createUserFields } = require('../middlewares');
  const { createUser, getUsers } = require('../controllers/userController');

require('dotenv').config();

const router = express.Router();

router.post('/', createUserFields, createUser);
router.get('/', getUsers);

module.exports = router;