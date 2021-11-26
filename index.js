const bodyParser = require('body-parser');
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));