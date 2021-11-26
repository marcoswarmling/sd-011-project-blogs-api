const express = require('express');

const { createUserFields } = require('../middlewares');
  const { createUser, getUsers, getUserById } = require('../controllers/userController');

require('dotenv').config();

const router = express.Router();

router.post('/', createUserFields, createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;