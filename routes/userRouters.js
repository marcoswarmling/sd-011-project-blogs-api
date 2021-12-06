const router = require('express').Router();
const authToken = require('../auth/authUser');
// const authToken = require('../auth/authUser');
const login = require('../controllers/loginController');
const userController = require('../controllers/userController');
const { validateFields, validateUserExists } = require('../middlewares/loginMiddlewares');
const { 
  validateEmail,
  validatePassword,
  validateDisplayName,
} = require('../middlewares/userMiddlewares');

router.post('/user',
  validateDisplayName, validateEmail, validatePassword, userController.createUser);
router.post('/login', validateFields, validateUserExists, login);
router.get('/user', authToken, userController.getUsers);

module.exports = router;

/* Referências:
  Consulta ao meu projeto Talker Mananger para relembrar como utilizar middlewares: https://github.com/tryber/sd-010-a-project-talker-manager/pull/130
  Consulta ao meu projeto Cookmaster para utilizar o jwt e validacao de token: https://github.com/tryber/sd-011-cookmaster/pull/92
*/