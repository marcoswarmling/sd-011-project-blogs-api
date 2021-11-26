const express = require('express');

const app = express();

app.use(express.json());

const userController = require('./controllers/userController');
const categorieController = require('./controllers/categorieController');
const postController = require('./controllers/postController');

app.use('/', userController, categorieController, postController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
