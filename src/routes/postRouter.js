const router = require('express').Router();
const postController = require('../controllers/postController');
const validations = require('../middleware/validations');

router.post('/post', 
  validations.validateToken, 
  validations.validatePost, 
  postController.createPost);
  router.get('/post', validations.validateToken, postController.allPost);

module.exports = router;