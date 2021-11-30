const express = require('express');
const { User } = require('../models');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
    response.send();
  });
// não remova esse endpoint, e para o avaliador funcionar

app.get('/ping', (_req, res) => res.send('tá rodando de boa')); // Para teste de rota

app.get('/users', async (_req, res) => { // Para teste de model
  try {
    const result = await User.findAll();
  
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Deu ruim' });
  }
});

app.all('*', (req, res) => res.status(404).send('Router not found'));

module.exports = app;