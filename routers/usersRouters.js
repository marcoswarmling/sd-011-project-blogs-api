const router = require('express').Router();

const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/usersValidate');

const {
  createUsers,
  getAllUsers,
} = require('../controllers/usersControllers');

router.get('/', getAllUsers);
router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  createUsers);

module.exports = router;
