const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('listening on port 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', routes);
