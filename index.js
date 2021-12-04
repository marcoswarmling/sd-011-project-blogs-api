const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/usersController');
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

app.post(
  '/login',
  emailLoginValid,
  passwordLoginValid,
  validEmailLoginExists,
  usersController.login,
);

app.get('/user', validateJWT, usersController.findAll);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
