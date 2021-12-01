const express = require('express');
const userRouter = require('./src/router/userRouter');
const loginRouter = require('./src/router/loginRouter');
const categoriesRouter = require('./src/router/categoriesRouter');
const postRouter = require('./src/router/postRouter');

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);
