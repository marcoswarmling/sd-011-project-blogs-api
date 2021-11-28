const router = require('express').Router();

const { validateLogin } = require('../middlewares/loginValidation');
const userController = require('../controllers/userController');

router.post('/', validateLogin, userController.userLogin);

module.exports = router;
