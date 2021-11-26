const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { createUser } = require('./controllers/userController');
const { nameValidation, emailExist, emailValidation, 
passwordValidation } = require('./middlewares/userValidation');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', nameValidation, emailValidation, passwordValidation, emailExist, createUser);