const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userController = require('./controller/UsersController');
const CategoryController = require('./controller/CategoriesController');
const PostController = require('./controller/PostController');
const { validateJWT } = require('./middlewares/verifyJWT');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.post('/login', userController.login);
app.get('/user', validateJWT, userController.getUser);
app.get('/user/:id', validateJWT, userController.getById);
app.post('/categories', validateJWT, CategoryController.createCategory);
app.get('/categories', validateJWT, CategoryController.getCategories);
app.post('/post', validateJWT, PostController.createPost);
app.get('/post', validateJWT, PostController.getAllPosts);

// app.delete('/post/id', validateJWT, PostController.deletePost);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
