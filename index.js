const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { createUser, loginUser, getAllUsers, getUserById } = require('./controllers/userController');
const { nameValidation, emailExist, emailValidation, 
passwordValidation, emailEmpty, passwordEmpty, 
tokenValidation } = require('./middlewares/userValidation');
const { nameIsValid } = require('./middlewares/categoriesValidation');
const { createCategory, getCategories } = require('./controllers/categorieController');
const { createPost } = require('./controllers/blogPostController');
const { blogPostValidation,
  contentIsValid,
  categoryIsValid,
  categoryIdExist } = require('./middlewares/blogPostValidation');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', nameValidation, emailValidation, passwordValidation, emailExist, createUser);
app.post('/login', emailEmpty, passwordEmpty, loginUser);
app.get('/user', tokenValidation, getAllUsers);
app.get('/user/:id', tokenValidation, getUserById);
app.post('/categories', tokenValidation, nameIsValid, createCategory);
app.get('/categories', tokenValidation, getCategories);
app.post('/post', 
blogPostValidation, contentIsValid, categoryIsValid, categoryIdExist, tokenValidation, createPost);
