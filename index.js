const express = require('express');
const { usersRoutes } = require('../routes/users');
const { errorMiddleware } = require('../Middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
