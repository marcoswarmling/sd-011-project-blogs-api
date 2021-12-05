const router = require('express').Router();
const { createPost } = require('../controllers/blogpostController');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createPost);

module.exports = router;