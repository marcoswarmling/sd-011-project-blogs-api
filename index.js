const express = require('express');

const app = express();
const PORT = 3000;

const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', usersRoutes);
app.use('/', loginRoutes);
app.use('/', categoriesRoutes);

app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}!`));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
//
