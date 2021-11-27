const express = require('express');
const bodyparser = require('body-parser').json();
const userRouter = require('./src/routes/userRouter');

const app = express();
app.use(bodyparser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador 
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);