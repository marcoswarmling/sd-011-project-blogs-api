const express = require('express');
const validateJWT = require('./auth/validateJWT');

const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const blogPostController = require('./controllers/blogPost.Controller');

const app = express();

app.use(express.json());

app.get('/user', validateJWT, userController.getAll);

app.get('/user/:id', validateJWT, userController.getById);

app.get('/categories', validateJWT, categoriesController.getAll);

app.get('/post', validateJWT, blogPostController.getAll);

app.post('/post', validateJWT, blogPostController.create);

app.post('/categories', validateJWT, categoriesController.create);

app.post('/user', userController.create);

app.post('/login', userController.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
