const router = require('express').Router();

const loginController = require('../controllers/loginController');

const { validationFields } = require('../validations');

router.post('/',
  validationFields,
  loginController.login);

module.exports = router;