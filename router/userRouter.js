const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/', userController);

module.exports = router;