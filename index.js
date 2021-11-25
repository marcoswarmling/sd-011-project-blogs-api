const express = require('express');

const app = express();
app.use(express.json());

const routerUsers = require('./routes/routeUsers');

app.use('/', routerUsers);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('ok');
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
