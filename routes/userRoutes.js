const router = require('express').Router();

const Users = require('../controllers/usersControllers');

const {
  validateUserJoi,
} = require('../middlewares/validateUsers');

const {
  isValidateToken,
} = require('../middlewares/auth/validateAuth');

router.get('/', isValidateToken, Users.getAllUsers);

router.get('/:id', isValidateToken, Users.getByIdUser);

router.post('/',
  validateUserJoi,
  Users.createUser);

module.exports = router;