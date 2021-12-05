const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/userController');


const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar

app.post('/user', user.validateUser, user.tokenCreate, user.validateRepetitiveEmail, user.createUser);

app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));