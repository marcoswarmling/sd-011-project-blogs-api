const router = require('express').Router();
const controller = require('../controllers/postController');
const auth = require('../middlewares/authMiddleware');

router.post('/post', auth, controller.postRegister);

module.exports = router;
