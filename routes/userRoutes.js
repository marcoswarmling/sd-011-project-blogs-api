const router = require('express').Router();
const controller = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.post('/user', controller.userRegister);
router.get('/user', auth, controller.getAllUsers);
router.get('/user/:id', auth, controller.getUserById);

module.exports = router;
