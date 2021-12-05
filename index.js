const express = require('express');

const app = express();

const { getAllUser } = require('./controller/UsersController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/users', (getAllUser));

app.listen(3000, () => console.log('ouvindo porta 3000!'));
