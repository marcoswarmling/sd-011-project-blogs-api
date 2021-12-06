const express = require('express');

const app = express();

// Imports
const routes = require('./routes/index');
const errors = require('./errors/errors');

// Rotas
app.use(express.json());
app.use('/user', routes.users);
app.use('/login', routes.login);
app.use('/categories', routes.categories);
app.use('/post', routes.posts);

// Runner do servidor
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// Disparador de errros
app.use(errors);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
