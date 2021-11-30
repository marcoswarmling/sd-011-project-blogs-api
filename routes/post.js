const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const joiValidator = require('../middlewares/validator');
const { postDataSchema } = require('../middlewares/post');
const { checkIfCategory } = require('../middlewares/categories');
const { insertNewPost, getPosts } = require('../controllers/post');

router.post('/post',
  validateJWT,
  joiValidator(postDataSchema),
  checkIfCategory,
  insertNewPost);

router.get('/post',
  validateJWT,
  getPosts);

module.exports = router;
