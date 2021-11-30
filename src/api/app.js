const express = require('express');
const { user } = require('../controllers');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
    response.send();
  });
// não remova esse endpoint, e para o avaliador funcionar

app.get('/ping', (_req, res) => res.send('tá rodando de boa')); // Para teste de rota

app.use('/users', user);

app.all('*', (_req, res) => res.status(404).send('Router not found'));

module.exports = app;