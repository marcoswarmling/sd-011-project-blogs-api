const express = require('express');
const UserController = require('./controllers/UserController');
const { validateJWT } = require('./validations/validateJWT');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/user', UserController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
