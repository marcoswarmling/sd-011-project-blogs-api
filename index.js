const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');

app.use('/', userController);
app.use('/', loginController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
