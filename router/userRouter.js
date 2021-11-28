const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/', userController);
router.get('/', userController);
router.get('/:id', userController);

module.exports = router;