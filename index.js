const express = require('express');
const userRoutes = require('./routes/userRoutes');
const userLogin = require('./routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.use('/login', userLogin);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
