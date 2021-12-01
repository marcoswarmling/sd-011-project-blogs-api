const express = require('express');

const app = express();
const validateUser = require('./Validations/validateUser');
const userController = require('./Controllers/userControllers');

app.post('/user', validateUser, userController.createUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
