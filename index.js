const express = require('express');
const User = require('./controllers/user');
const errorMiddleware = require('./middlewares/Error');
const ValidationJWT = require('./middlewares/ValidationJWT');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', User.createUser);
app.get('/user', ValidationJWT.validateToken, User.getAllUsers);
app.post('/login', User.userLogin);

app.use(errorMiddleware);
