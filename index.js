const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const loginController = require('./controllers/loginController');

const categoryController = require('./controllers/categoryController');

const {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  isValidName } = require('./middlewares/validations');

const {
  isValidLoginEmail,
  isValidLoginPassword } = require('./middlewares/loginValidations');

const validateToken = require('./auth/validateToken');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.post('/user', isValidDisplayName, isValidEmail, isValidPassword, userController.createNewUser);

app.post('/login', isValidLoginEmail, isValidLoginPassword, loginController.login);

app.get('/user', validateToken, userController.getAllUser);

app.get('/user/:id', validateToken, userController.getUserById);

app.post('/categories', validateToken, isValidName, categoryController.createNewCategory);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));