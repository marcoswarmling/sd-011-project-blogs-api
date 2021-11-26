const express = require('express');
const middlewareError = require('./src/middlewares/errorsResponses');
const rootRouter = require('./src/routes');

const app = express();

app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(rootRouter);

app.use(middlewareError);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));