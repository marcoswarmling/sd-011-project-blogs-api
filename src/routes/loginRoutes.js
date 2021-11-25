const router = require('express').Router();
const loginController = require('../controllers/loginController');
const { paramsValidation } = require('../validation/validateLogin');

router.post('/', paramsValidation, loginController.createLogin);

module.exports = router;