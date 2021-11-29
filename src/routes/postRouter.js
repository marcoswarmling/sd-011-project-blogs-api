const router = require('express').Router();
const postController = require('../controller/post');
const { verifyToken } = require('../middleware/token');

router.use(verifyToken);

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);

module.exports = router;