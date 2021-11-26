const express = require('express');
const UserController = require('./controllers/userController');
const CategoryController = require('./controllers/categoryController');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', UserController.getAll);
app.get('/user/:id', UserController.getById);

app.post('/user', UserController.createUser);
app.post('/login', UserController.login);
app.post('/categories', CategoryController.addCategory);