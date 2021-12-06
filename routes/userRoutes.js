const router = require('express').Router();
const userController = require('../controllers/usersController');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getUsers);

module.exports = router;
