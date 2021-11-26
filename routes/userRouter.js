const express = require('express');
const {
  create,
} = require('../controllers/userController');
const { userErrors } = require('../helpers/handleErrors');

const router = express.Router();

router.post('/', create);
router.use(userErrors);

module.exports = router;
