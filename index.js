const express = require('express');
const UserController = require('./controllers/userController');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', UserController.getAll);
app.post('/user', UserController.createUser);