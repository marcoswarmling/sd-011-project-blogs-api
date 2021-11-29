const router = require('express').Router();
const controller = require('../controllers/postController');
const auth = require('../middlewares/authMiddleware');

router.post('/post', auth, controller.postRegister);
router.get('/post', auth, controller.getAllPosts);
router.get('/post/:id', auth, controller.getPostById);
router.put('/post/:id', auth, controller.updatePost);
router.delete('/post/:id', auth, controller.removePost);

module.exports = router;
