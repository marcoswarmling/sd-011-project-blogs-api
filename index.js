const express = require('express');

const app = express();
app.use(express.json());

const { createUser } = require('./controllers/userController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Rota teste
app.get('/ping', (_, res) => res.send('Pong'));

app.post('/user', createUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));