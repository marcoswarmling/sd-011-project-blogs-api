const router = require('express').Router();
const userController = require('../controllers/userController');
const validateJWT = require('../auth/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getUsers);
router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;
