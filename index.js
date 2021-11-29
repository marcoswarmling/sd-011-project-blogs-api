const express = require('express');
const validateJWT = require('./auth/validateJWT');

const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

app.get('/user', validateJWT, userController.getAll);
app.get('/user/:id', validateJWT, userController.getById);
app.post('/user', userController.create);
app.post('/login', userController.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
