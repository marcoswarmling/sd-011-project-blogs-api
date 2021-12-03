const router = require('express').Router();
const validate = require('../midllewares/index');
const postController = require('../controllers/postControllers');

router.get('/search', validate.jwtValidation, postController.getAllPosts);

router.get('/:id', validate.jwtValidation, postController.getOnePost);

router.get('/', validate.jwtValidation, postController.getAllPosts);

module.exports = router;