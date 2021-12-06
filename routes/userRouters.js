const router = require('express').Router();
const userController = require('../controllers/userController');
const { 
  validateEmail,
  validatePassword,
  validateDisplayName,
} = require('../middlewares/userMiddlewares');

router.post('/user',
  validateDisplayName, validateEmail, validatePassword, userController.createUser);

module.exports = router;

/* Referências:
  Consulta ao meu projeto Talker Mananger para relembrar como utilizar middlewares: https://github.com/tryber/sd-010-a-project-talker-manager/pull/130
*/