const express = require('express');
const { user, login, categories, post } = require('./src/router/router');

const app = express();
app.use(express.json());

app.use('/', user);
app.use('/', login);
app.use('/', categories);
app.use('/', post);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
