const express = require('express');

const User = require('./controllers/User');
const Categorie = require('./controllers/Categorie.js');

const Authentication = require('./middlewares/Authenticate');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', User.create);
app.post('/login', User.login);
app.get('/user/:id', Authentication, User.getById);
app.get('/user', Authentication, User.getAll);

app.post('/categories', Authentication, Categorie.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
