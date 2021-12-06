const express = require('express');
require('dotenv').config();

const app = express();

const login = require('./route/loginRouter');
const user = require('./route/userRouter');
const categories = require('./route/categoriesRouter');
const post = require('./route/postRouter');

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
// teste
app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));