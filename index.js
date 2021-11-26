const express = require('express');

const userRouter = require('./src/routes/userRouter');
const loginRouter = require('./src/routes/loginRouter');
const categoriesRouter = require('./src/routes/categoriesRouter');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
