const router = require('express').Router();
const { createPost, getPosts } = require('../controllers/blogpostController');
const validateToken = require('../middlewares/validateJWT');

router.post('/', validateToken, createPost);
router.get('/', validateToken, getPosts);

module.exports = router;
