const router = require('express').Router();

const UserController = require('./controllers/useController');
const Validations = require('./validations/Validations');
const LoginController = require('./controllers/LoginController');
const CategorieController = require('./controllers/CategorieController');

const useController = new UserController();
const validations = new Validations();
const login = new LoginController();
const categories = new CategorieController();

router.get('/user', useController.getAllUsers.bind(useController));
router.post('/user', 
  validations.validName.bind(validations),
  validations.validEmail.bind(validations),
  validations.validPassword.bind(validations),
  useController.createUser.bind(useController));

router.post('/login', 
  validations.validEmail.bind(validations),
  validations.validPassword.bind(validations),
  login.loginUser.bind(login));

router.get('/user/:id', useController.getUserById.bind(useController));

router.post('/categories',
  validations.validBodyCategory.bind(validations),
  categories.createCategory.bind(categories));

router.get('/categories', categories.getAllCategories.bind(categories));

module.exports = router;