const express = require('express');
const bodyParser = require('body-parser');

// Tive ajuda no requisito 1 e 2 do Diogo, ajudou eu implantar o Joi

const app = express();
app.use(bodyParser.json());

const usersRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');
const categorieRouter = require('./routes/categorieRoutes');
const blogPostsRouter = require('./routes/blogPostsRoutes');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/categories', categorieRouter);
app.use('/post', blogPostsRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));