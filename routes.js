const router = require('express').Router();

const UserController = require('./controllers/useController');
const Validations = require('./validations/Validations');

const useController = new UserController();
const validations = new Validations();

router.get('/', useController.getAllUsers.bind(useController));
router.post('/', 
  validations.validName.bind(validations),
  validations.validEmail.bind(validations),
  validations.validPassword.bind(validations),
  useController.createUser.bind(useController));

module.exports = router;