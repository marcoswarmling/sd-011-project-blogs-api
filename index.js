const express = require('express');
const { Users } = require('./models/index.js');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', async (_req, res) => {
  const allUsers = await Users.findAll();
  return res.status(200).json(allUsers);
});
