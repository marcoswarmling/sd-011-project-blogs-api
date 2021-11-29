const express = require('express');
const { userRouter, loginRouter, categoryRouter, postRouter } = require('./src/routes');
const error = require('./src/middlewares/error');
require('dotenv').config();

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
module.exports = app;
