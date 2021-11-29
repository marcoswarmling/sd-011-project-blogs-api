const express = require('express');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
    response.send();
  });
// não remova esse endpoint, e para o avaliador funcionar

app.get('/ping', (_req, res) => res.send('tá rodando de boa'));

app.all('*', (req, res) => res.status(404).send('Router not found'));

module.exports = app;