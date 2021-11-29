const express = require('express');
const bodyParser = require('body-parser');
const ControllerUser = require('./controllers/user');
const ControllerCategories = require('./controllers/categories');
const Middleware = require('./middleware');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', Middleware.validateNewUser, ControllerUser.createUser);
app.post('/login', Middleware.validateLogin, ControllerUser.login);
app.get('/user', Middleware.validateToken, ControllerUser.getAllUsers);
app.get('/user/:id', Middleware.validateToken, ControllerUser.getUserById);
app.post('/categories', Middleware.validateToken, ControllerCategories.createCategory);
app.get('/categories', Middleware.validateToken, ControllerCategories.getAllCategories);