const express = require('express');
require('dotenv').config();

const rootRouter = require('./src/routes');

const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(rootRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));