const express = require('express');
const UserRouter = require('./routes/user.router');
const LoginRouter = require('./routes/login.router');
const CategoriesRouter = require('./routes/categories.router');

const ApiErrorHandler = require('./middlewares/error.midddleware');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/categories', CategoriesRouter);

app.use(ApiErrorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));