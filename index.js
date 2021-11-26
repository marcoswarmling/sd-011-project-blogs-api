const express = require('express');
const userRouter = require('./src/routes/userRouter');
const categoriesRouter = require('./src/routes/categorieRouter');
const postRouter = require('./src/routes/postRouter');

const app = express();
app.use(express.json());

app.use('/', userRouter);
app.use('/', categoriesRouter);
app.use('/', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
