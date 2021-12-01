const router = require('express').Router();
const BlogPostController = require('../controllers/BlogPostController');
const { validateJWT } = require('../middlewares/validateJWT');

const {
  titleExists,
  contentExists,
  categoryIdExists,
  categoryIdIsRequired,
} = require('../middlewares/BlogPostValidations');

const req7Validations = [
  titleExists,
  contentExists,
  categoryIdExists,
  categoryIdIsRequired,
  validateJWT,
];

// Req 7
router.post('/post', req7Validations, BlogPostController.create);

// Req 8
router.get('/post', validateJWT, BlogPostController.getAll);

module.exports = router;