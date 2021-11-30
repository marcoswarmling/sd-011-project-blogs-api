const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', require('./router/userRouter'));
app.use('/login', require('./router/loginRouter'));
app.use('/categories', require('./router/categoriesRouter'));
app.use('/post', require('./router/blogPostRouter'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
