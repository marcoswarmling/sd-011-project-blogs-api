const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/userController');
const category = require('./controllers/categoryController');
const blogPost = require('./controllers/blogPostController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar

app.post('/user',
  user.validateUser,
  user.createToken,
  user.validateRepetitiveEmail,
  user.createUser);

app.post('/login',
  user.validateCredentials,
  user.createToken,
  user.login);

app.get('/user',
  user.validateJWT,
  user.listAllUsers);

app.get('/user/:id',
  user.validateJWT,
  user.listById);

app.post('/categories',
  user.validateJWT,
  category.createCategory);

app.get('/categories',
  user.validateJWT,
  category.listAllCategories);

app.post('/post',
  user.validateJWT,
  blogPost.createBlogPost);

app.get('/post',
  user.validateJWT,
  blogPost.getAllBlogPost);

app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));