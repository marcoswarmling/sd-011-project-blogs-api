const express = require('express');
const bodyparser = require('body-parser').json();
const userRouter = require('./routes/userRouter');
const middlewareError = require('./middlewares/errors');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador 
app.get('/', (request, response) => {
  response.send();
});

app.use(bodyparser);
app.use(userRouter);
app.use(middlewareError);
