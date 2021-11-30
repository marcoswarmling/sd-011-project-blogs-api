const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./controllers/Users');
const Categories = require('./controllers/Categories');

const validateJwt = require('./auth/validateJwt');

const app = express();

app.use(bodyParser.json());

// Users
app.post('/user', Users.create);
app.post('/login', Users.login);
app.get('/user', validateJwt, Users.getAll);
app.get('/user/:id', validateJwt, Users.getById);

// Categories
app.post('/categories', validateJwt, Categories.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
