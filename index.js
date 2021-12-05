const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/usersController');
const categoriesController = require('./controllers/categoriesController');
const {
  validDisplayName,
  validEmail,
  validPassword,
  validEmailExists,
  emailLoginValid,
  passwordLoginValid,
  validEmailLoginExists,
} = require('./middlewares/usersValidations');
const validateJWT = require('./auth/validateJWT');
const { validName } = require('./middlewares/categoriesValidations');

const app = express();
app.use(bodyParser.json());

app.post(
  '/user',
  validDisplayName,
  validEmail,
  validPassword,
  validEmailExists,
  usersController.create,
);

app.post('/categories', validateJWT, validName, categoriesController.create);

app.get('/categories', validateJWT, categoriesController.findAll);

app.post(
  '/login',
  emailLoginValid,
  passwordLoginValid,
  validEmailLoginExists,
  usersController.login,
);

app.get('/user', validateJWT, usersController.findAll);

app.get('/user/:id', validateJWT, usersController.findByPk);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
