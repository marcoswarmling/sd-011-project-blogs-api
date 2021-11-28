const express = require('express');
const post = require('../controllers/blogPostController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(express.json());
router.get('/', auth, post.getAll);
router.post('/', auth, post.createPost);
router.get('/:id', auth, post.getPostById);
router.put('/:id', auth, post.updatePost);

module.exports = router;
