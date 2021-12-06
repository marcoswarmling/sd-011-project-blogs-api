const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3000;

app.use('/user', require('./route/userRouter'));
app.use('/login', require('./route/loginRouter'));
app.use('/categories', require('./route/categoriesRouter'));

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));