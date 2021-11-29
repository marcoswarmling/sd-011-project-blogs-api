const express = require('express');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

const {
  validateDisplayName,
  validateEmail,
  verifyPassword,
} = require('./validations/validateUser');

const {
  validateEmailExists,
  validateEmailLength,
  verifyPasswordExists,
  verifyPasswordLength,
  verifyUser,
} = require('./validations/validateLogin');

const app = express();
app.use(express.json());

app.post(
  '/user',
  validateDisplayName,
  validateEmail,
  verifyPassword,
  UserController.createUser,
);

app.post(
  '/login',
  validateEmailLength,
  verifyPasswordLength,
  validateEmailExists,
  verifyPasswordExists,
  verifyUser,
  LoginController.login,
);

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
