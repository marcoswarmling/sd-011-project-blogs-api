const router = require('express').Router();

const postController = require('../controllers/postController');

const authToken = require('../validations/authToken');
const { validationFields } = require('../validations');
const {
  validExistsCategory,
  cannotBeEditedCategory,
} = require('../validations/BlogPosts/categoryId');

router.post('/',
  authToken,
  validationFields,
  validExistsCategory,
  postController.registerNewPost);

router.put('/:id',
  authToken,
  validationFields,
  cannotBeEditedCategory,
  postController.updatePost);
  
router.get('/',
  authToken,
  postController.searchAllPosts);
  
router.get('/:id',
  authToken,
  postController.searchById);

module.exports = router;