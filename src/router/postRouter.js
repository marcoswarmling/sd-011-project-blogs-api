const router = require('express').Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');
const blogPostsValidationError = require('../middlewares/blogPostsValidationError');

router.post('/', tokenValidation, blogPostsValidationError, postController.createPost);
router.get('/', tokenValidation, postController.getPosts);

module.exports = router;
