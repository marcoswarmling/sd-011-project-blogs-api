const express = require('express');

const { usersRouter, categoriesRouter } = require('./routes');
const { handleError } = require('./middlewares');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', usersRouter);
app.use('/categories', categoriesRouter);
app.use(handleError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
