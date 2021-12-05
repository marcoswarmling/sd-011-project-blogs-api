require('dotenv').config();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const express = require('express');
const { errorMiddleware } = require('./middlewares');
const routes = require('./routes');
const { startServer } = require('./bin');

const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.category);

app.use(errorMiddleware);

startServer(app);
