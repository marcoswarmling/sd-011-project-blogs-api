const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userController = require('./controller/UsersController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.post('/login', userController.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
