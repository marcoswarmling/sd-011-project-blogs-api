const router = require('express').Router();

const { validateToken } = require('../middlewares/validateJWT');
const { validateUser } = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

router.post('/', validateUser, userController.createUser);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;