const express = require('express');
const usersRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoyRoutes = require('./routes/categoryRoutes');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoyRoutes);
