const express = require('express');

const allRouters = require('./routers/index');

const app = express();

app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', allRouters.usersRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));