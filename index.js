const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const {
  isValidDisplayName,
  isValidEmail,
  isValidPassword } = require('./middlewares/validations');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.post('/user', isValidDisplayName, isValidEmail, isValidPassword, userController.createNewUser);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));