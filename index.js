const express = require('express');

const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRoutes);
app.use('/login', loginRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
