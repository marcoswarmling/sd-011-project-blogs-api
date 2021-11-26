const router = require('express').Router();

const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/usersValidate');

const {
  createUsers,
} = require('../controllers/usersControllers');

router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  createUsers);

module.exports = router;
