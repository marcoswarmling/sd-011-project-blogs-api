const express = require('express');

require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userRouter = require('./routers/userRouters');
const loginRouter = require('./routers/loginRouter');
const categorieRouter = require('./routers/categorieRouter');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categorieRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
