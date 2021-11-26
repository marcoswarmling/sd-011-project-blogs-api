const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.unsubscribe(express.urlencoded({ extended: false }));

const routesUsers = require('./routes/index');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routesUsers.usersRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));