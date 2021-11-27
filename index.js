const express = require('express');
const UserController = require('./controllers/UserController');

const {
  validateDisplayName,
  validateEmal,
  verifyPassword,
} = require('./validations/validateUser');

const app = express();
app.use(express.json());

app.use(
  '/user',
  validateDisplayName,
  validateEmal,
  verifyPassword,
  UserController,
);

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
