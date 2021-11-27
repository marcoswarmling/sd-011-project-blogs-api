const express = require('express');
const bodyParser = require('body-parser');

// Tive ajuda no requisito 1 e 2 do Diogo, ajudou eu implantar o Joi

const app = express();
app.use(bodyParser.json());

const loginRouter = require('./routes/loginRoutes');
const usersRouter = require('./routes/userRoutes');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRouter);
app.use('/login', loginRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));