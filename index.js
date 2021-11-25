const express = require('express');
const BodyParser = require('body-parser');

const app = express();
app.use(BodyParser.json());

const UserRouter = require('./routes/UserRouter');

app.get('/', (req, res) => {
  res.send('ping');
});

app.use('/', UserRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
