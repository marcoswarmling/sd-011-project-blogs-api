const express = require('express');
const { Users } = require('./models/index.js');

const app = express();

app.use(express.json());

app.listen(3001, () => console.log('ouvindo porta 3001!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', async (_req, res) => {
  const allUsers = await Users.findAll();
  return res.status(200).json(allUsers);
});
