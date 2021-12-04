const router = require('express').Router();
const postController = require('../controllers/blogPosts');
const { validateToken } = require('../Middlewares/authorizations');
const { verifyOwner } = require('../Middlewares/verifyOwner');
const { postMiddleware, putPostMiddleware } = require('../Middlewares/blogPostsMiddleware');

router.post('/', validateToken, postMiddleware, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getById);
router.put('/:id', validateToken, putPostMiddleware, verifyOwner, postController.editPost);
router.delete('/:id', validateToken, verifyOwner, postController.deletePost);

module.exports = router;