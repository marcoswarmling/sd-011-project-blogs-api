const router = require('express').Router();
const postController = require('../controller/blogPostsController');
const { checkPost } = require('../middleware/post');
const { authorizationToken } = require('../middleware/user');

router.post('/post', checkPost, authorizationToken, postController.create);
router.get('/post', checkPost, authorizationToken, postController.getAll);

module.exports = router;