const router = require('express').Router();
const controller = require('../controllers/categoryController');
const auth = require('../middlewares/authMiddleware');

router.post('/categories', auth, controller.categoryRegister);

module.exports = router;
