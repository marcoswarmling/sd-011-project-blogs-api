const router = require('express').Router();

// const { validateToken } = require('../middlewares/validateJWT');
const { validateUser } = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

router.post('/', validateUser, userController.createUser);

module.exports = router;