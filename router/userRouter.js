const express = require('express');

const {
  createCategory,
  listCategories,
} = require('../controllers/category-controllers');

const { validCategoryField } = require('../middleware/validateCategories');

const {
  addNewUser,
  loginUser,
  listAllUsers,
  listUserById,
} = require('../controllers/user-controllers');

const {
  validateName,
  validateEmail,
  validatePassword,
  emailExists,
  userExists,
} = require('../middleware/validateUser');

const {
  validEmailField,
  validPasswordField,
} = require('../middleware/validateLogin');

const { validToken } = require('../middleware/validateToken');

const router = express.Router();

router.get('/user/:id',
validToken,
userExists,
listUserById);

router.get('/user',
validToken,
listAllUsers);

router.post('/user',
validateName,
validateEmail,
validatePassword,
emailExists,
addNewUser);

router.post('/login',
validEmailField,
validPasswordField,
loginUser);

router.get('/categories',
validToken,
listCategories);

router.post('/categories',
validToken,
validCategoryField,
createCategory);

module.exports = router;
