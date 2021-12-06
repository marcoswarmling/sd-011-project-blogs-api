const router = require('express').Router();
const userController = require('../controllers/usersController');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getUsers);
router.get('/:id', validateJWT, userController.getUserById);
module.exports = router;
