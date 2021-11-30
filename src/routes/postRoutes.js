const router = require('express').Router();
const postController = require('../controllers/postController');
const validateJWT = require('../auth/validateJWT');
const { paramsValidation } = require('../validation/validatePost');

router.post('/', validateJWT, paramsValidation, postController.createPost);
router.get('/', validateJWT, postController.getAllPost);

module.exports = router;