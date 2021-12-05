const express = require('express');
const { user, login, category, post } = require('../controllers');
const errorMiddleware = require('../utils/errorMiddleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
    response.send();
  });
// não remova esse endpoint, e para o avaliador funcionar

app.get('/ping', (_req, res) => res.send('tá rodando de boa')); // Para teste de rota

// app.post('/teste', (req, res) => { // Para teste de rota
//   const { body } = req;
//   const { displayName } = body;

//   // res.json({ message: ` aqui o body: ${body}` }); 
// });

app.use('/user', user);
app.use('/login', login);
app.use('/categories', category);
app.use('/post', post);

app.all('*', (_req, res) => res.status(404).send('Router not found'));
app.use(errorMiddleware);

module.exports = app;