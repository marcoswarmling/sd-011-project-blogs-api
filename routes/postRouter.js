const express = require('express');
const {
  create,
  // getAll,
} = require('../controllers/postController');

const router = express.Router();

router.post('/post', create);
// router.get('/post', getAll);

module.exports = router;