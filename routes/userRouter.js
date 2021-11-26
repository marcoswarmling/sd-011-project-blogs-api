const express = require('express');
const {
  create,
  login,
  getAll,
} = require('../controllers/userController');
const { userErrors } = require('../helpers/handleErrors');

const router = express.Router();

router.post('/user', create);
router.get('/user', getAll);
router.post('/login', login);
router.use(userErrors);

module.exports = router;
