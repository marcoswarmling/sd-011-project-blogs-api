const router = require('express').Router();

const { 
  registerDataSchema,
  validatePasswordLength,
} = require('../middlewares/register');
const joiValidator = require('../middlewares/validator');

const { 
  validateEmailExistence,
} = require('../middlewares/register');
const {
  register,
} = require('../controllers/register');

router.post('/user',
  joiValidator(registerDataSchema),
  validatePasswordLength,
  validateEmailExistence,
  register);

module.exports = router;
