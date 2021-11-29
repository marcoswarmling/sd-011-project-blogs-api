const express = require('express');
const bodyParser = require('body-parser');
const allRouters = require('./routers/index');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', allRouters.usersRouter);
app.use('/login', allRouters.loginRouter);
app.use('/categories', allRouters.categoriesRouter);
app.use('/post', allRouters.blogPostsRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));