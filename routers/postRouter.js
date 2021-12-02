const router = require('express').Router();
const postController = require('../controller/blogPostsController');
const { checkPost, categoryExists } = require('../middleware/post');
const { authorizationToken } = require('../middleware/user');

router.post('/post', checkPost, categoryExists, authorizationToken, postController.create);
router.get('/post', authorizationToken, postController.getAll);
router.get('/post/:id', authorizationToken, postController.getId);

module.exports = router;