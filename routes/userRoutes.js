const router = require('express').Router();

const { createUser } = require('../controllers/usersControllers');

const {
  isValidateDisplayName,
  isValidateEmail,
  isValidatePassword,
} = require('../middlewares/validateUsers');

router.post('/',
  isValidateDisplayName,
  isValidateEmail,
  isValidatePassword,
  createUser);

module.exports = router;