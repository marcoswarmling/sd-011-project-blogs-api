const router = require('express').Router();

const postController = require('../controllers/postController');

const authToken = require('../validations/authToken');
const { validationFields } = require('../validations');
const { validExistsCategory } = require('../validations/BlogPosts/categoryId');

router.post('/',
  authToken,
  validationFields,
  validExistsCategory,
  postController.registerNewPost);

router.get('/:id',
  authToken,
  postController.searchById);

router.get('/',
  authToken,
  postController.searchAllPosts);

module.exports = router;