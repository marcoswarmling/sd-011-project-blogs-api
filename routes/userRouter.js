const express = require('express');
const {
  create,
  login,
} = require('../controllers/userController');
const { userErrors } = require('../helpers/handleErrors');

const router = express.Router();

router.post('/user', create);
router.post('/login', login);
router.use(userErrors);

module.exports = router;
