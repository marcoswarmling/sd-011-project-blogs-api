const express = require('express');
const { user, login } = require('./src/router/router');

const app = express();
app.use(express.json());

app.use('/', user);
app.use('/', login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
