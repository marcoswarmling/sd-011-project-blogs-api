const router = require('express').Router();
const postController = require('../controllers/postController');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, postController.createPost);

module.exports = router;