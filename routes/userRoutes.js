const router = require('express').Router();
const userController = require('../controllers/userController');
const validateJWT = require('../auth/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getUsers);

module.exports = router;
