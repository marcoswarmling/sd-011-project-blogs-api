const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const loginController = require('./controllers/loginController');

const {
  isValidDisplayName,
  isValidEmail,
  isValidPassword } = require('./middlewares/validations');

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

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));