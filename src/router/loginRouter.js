const router = require('express').Router();
const loginController = require('../controllers/loginController');
const loginValidationError = require('../middlewares/loginValidationError');

router.post('/', loginValidationError, loginController.login);

module.exports = router;
