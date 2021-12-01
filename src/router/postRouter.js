const router = require('express').Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');
const blogPostsValidationError = require('../middlewares/blogPostsValidationError');

router.post('/', tokenValidation, blogPostsValidationError, postController.createPost);
router.get('/', tokenValidation, postController.getPosts);
router.get('/:id', tokenValidation, postController.getPostById);

module.exports = router;
