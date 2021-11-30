const express = require('express');
const bodyParser = require('body-parser');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
  missingToken,
  auth,
  postValidation,
} = require('./validations/middlewares');

const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const blogPostController = require('./controllers/blogPostController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post(
  '/user',
  nameValidation,
  emailValidation,
  passwordValidation,
  userController.createUser,
);

app.post(
  '/login',
  emailValidation,
  passwordValidation,
  userController.login,
);

app.get(
  '/user',
  missingToken,
  auth,
  userController.findAll,
);

app.get(
  '/user/:id',
  missingToken,
  auth,
  userController.findById,
);

app.post(
  '/categories',
  missingToken,
  auth,
  categoriesController.createCategory,
);

app.get(
  '/categories',
  missingToken,
  auth,
  categoriesController.findAll,
);

app.post(
  '/post',
  postValidation,
  missingToken,
  auth,
  blogPostController.createBlogPost,
);

app.get(
  '/post',
  missingToken,
  auth,
  blogPostController.findAll,
);
