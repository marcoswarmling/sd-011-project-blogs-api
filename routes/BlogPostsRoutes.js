const router = require('express').Router();
const Validations = require('../middlewares/index');
const BlogPostController = require('../controllers/blogPostController');

router.post(
  '/', 
  Validations.validateJWT,
  Validations.postValidation,
  BlogPostController.post,
);

router.get('/:id', Validations.validateJWT, BlogPostController.getOnePost);

router.get('/', Validations.validateJWT, BlogPostController.getAllPosts);

router.put(
  '/:id',
  Validations.validateJWT,
  Validations.updateValidation,
  BlogPostController.updateOnePost,
);

module.exports = router;