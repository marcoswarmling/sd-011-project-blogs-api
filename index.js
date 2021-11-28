const express = require('express');
const { userRouter, loginRouter, categoryRouter, postRouter } = require('./src/routes');
const error = require('./src/middlewares/error');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(error);

module.exports = app;
