const express = require('express');
const categoriesRoute = require('./routes/categoriesRoute');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));