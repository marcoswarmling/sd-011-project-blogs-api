const express = require('express');
const routes = require('./routes');
const erroMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', routes.User);

app.use('/login', routes.Login);

app.use(erroMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
