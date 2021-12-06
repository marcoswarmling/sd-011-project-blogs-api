const router = require('express').Router();
const blogpostController = require('../controllers/blogpostController');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', validateJWT, blogpostController.createPost);
router.get('/', validateJWT, blogpostController.getPosts);
router.get('/:id', validateJWT, blogpostController.getPost);

module.exports = router;
