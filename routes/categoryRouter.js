const express = require('express');
const {
  create,
  getAll,
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/categories', create);
router.get('/categories', getAll);

module.exports = router;