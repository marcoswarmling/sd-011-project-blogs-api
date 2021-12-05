const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const validateUser = require('./Validations/validateUser');
const userController = require('./Controllers/userControllers');
const validateLogin = require('./Validations/validateLogin');

app.post('/user', validateUser, userController.createUser);
app.post('/login', validateLogin, userController.userLogin);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// requisito 1 e 2 reaproveitado do meu código do projeto turma 10-a