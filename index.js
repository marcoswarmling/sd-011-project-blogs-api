const express = require('express');

const cors = require('cors');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const usersRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(registerRoutes);
app.use(loginRoutes);
app.use(usersRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
