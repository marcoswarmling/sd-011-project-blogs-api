const express = require('express');
require('dotenv').config();

const userRouter = require('./src/routes/userRouter');
const loginRouter = require('./src/routes/userRouter');

const app = express();
app.use(express.json());

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
