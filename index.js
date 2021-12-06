const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userController = require('./controller/UsersController');
const CreateController = require('./controller/CategoriesController');
const { validateJWT } = require('./middlewares/verifyJWT');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.post('/login', userController.login);
app.get('/user', validateJWT, userController.getUser);
app.get('/user/:id', validateJWT, userController.getById);
app.post('/categories', validateJWT, CreateController.createCategory);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
