const router = require('express').Router();
const { createPost } = require('../controllers/blogpostController');
const validateToken = require('../middlewares/validateJWT');

router.post('/', validateToken, createPost);

module.exports = router;
