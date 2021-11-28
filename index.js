const express = require('express');

const userRoute = require('./routes/userRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const postRoute = require('./routes/postRoute');
const error = require('./middlewares/error');
const { loginUser } = require('./controllers/userController');
const { validateLogin } = require('./middlewares/validation');

const app = express();

app.use(express.json());

// não remova esse endpoint para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);
app.post('/login', validateLogin, loginUser);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));