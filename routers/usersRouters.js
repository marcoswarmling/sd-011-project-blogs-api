const router = require('express').Router();

const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/usersValidate');

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  createUsers,
  getUserById,
  getAllUsers,
} = require('../controllers/usersControllers');

router.get('/:id', validateJWTToken, getUserById);
router.get('/', validateJWTToken, getAllUsers);
router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  createUsers);

module.exports = router;
