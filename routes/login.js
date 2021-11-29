const router = require('express').Router();
const joiValidator = require('../middlewares/validator');
const { 
  loginDataSchema,
} = require('../middlewares/login');

const { 
  validatePasswordLength,
} = require('../middlewares/register');

const {
  login,
} = require('../controllers/login');

router.post('/login',
  joiValidator(loginDataSchema),
  validatePasswordLength,
  login);

module.exports = router;
