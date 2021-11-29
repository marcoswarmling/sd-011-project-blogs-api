const express = require('express');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const CategoryController = require('./controllers/CategoryController');

const {
  validateDisplayName,
  validateEmail,
  verifyPassword,
  VerifyUserExist,
} = require('./validations/validateUser');

const {
  validateEmailExists,
  validateEmailLength,
  verifyPasswordExists,
  verifyPasswordLength,
  verifyUser,
} = require('./validations/validateLogin');

const { validateJWT } = require('./validations/validateJWT');

const { verifyName,
} = require('./validations/validateCategory');

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

app.get(
  '/user',
  validateJWT,
  UserController.getAllUsers,
);

app.get(
  '/user/:id',
  validateJWT,
  VerifyUserExist,
  UserController.getUserById,
);

app.post(
  '/categories',
  validateJWT,
  verifyName,
  CategoryController.createCategory,
);

app.get(
  '/categories',
  validateJWT,
  CategoryController.getAllCategories,
);

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
