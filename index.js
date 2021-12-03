const express = require('express');
const userRoutes = require('./Router/userRoutes');
const loginRoutes = require('./Router/loginRoutes');
const categoriesRoutes = require('./Router/categoriesRoutes');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/user', userRoutes);

app.use('/login', loginRoutes);

app.use('/categories', categoriesRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
