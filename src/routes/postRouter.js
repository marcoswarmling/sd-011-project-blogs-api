const router = require('express').Router();
const postController = require('../controllers/postController');
const validations = require('../middleware/validations');

router.post('/post', 
  validations.validateToken, 
  validations.validatePost, 
  postController.createPost);
router.get('/post', validations.validateToken, postController.allPost);
router.get('/post/:id', validations.validateToken, postController.postById);
router.put('/post/:id', 
  validations.validateToken, 
  validations.validateUpdate, 
  postController.update);

router.delete('/post/:id', validations.validateToken, postController.deleteOne);

module.exports = router;