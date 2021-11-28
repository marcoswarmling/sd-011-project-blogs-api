require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const categoriesRoutes = require('./routes/categories');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
