const express = require('express');
const bodyParser = require('body-parser');

const { user } = require('./src/router/router');

const app = express();
app.use(bodyParser.json());

app.use('/', user);

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});
