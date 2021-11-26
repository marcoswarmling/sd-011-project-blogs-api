const express = require('express');
const usersRoutes = require('./routes/usersRoute');
const loginRoutes = require('./routes/loginRoute');
const categoryRoutes = require('./routes/categoriesRoute');

const app = express();

app.use(express.json());

app.use('/user', usersRoutes);

app.use('/login', loginRoutes);

app.use('/categories', categoryRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
