const router = require('express').Router();
const controller = require('../controllers/postController');
const auth = require('../middlewares/authMiddleware');

router.post('/post', auth, controller.postRegister);
router.get('/post', auth, controller.getAllPosts);
router.get('/post/:id', auth, controller.getPostById);

module.exports = router;
