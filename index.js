const express = require('express');
const userRoute = require('./src/routes/userRoute');
const loginRoute = require('./src/routes/loginRoute');
const { getErrors } = require('./src/middlewares/errors');
const categoryRoute = require('./src/routes/categoryRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);

app.use(getErrors);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
