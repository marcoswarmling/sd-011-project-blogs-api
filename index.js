const express = require('express');
const rescue = require('express-rescue');
const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', rescue(usersRoutes));
app.use('/login', rescue(loginRoutes));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(error);
