const express = require('express');
const error = require('./src/middleware/error');
const route = require('./src/routes')

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(express.json());
app.get('/', (request, response) => {
  response.send();
});

app.use(error);