const express = require('express');
const {
  create,
  login,
  getAll,
  getById,
} = require('../controllers/userController');
const { userErrors } = require('../helpers/handleErrors');

const router = express.Router();

router.post('/user', create);
router.get('/user', getAll);
router.get('/user/:id', getById);
router.post('/login', login);
router.use(userErrors);

module.exports = router;
