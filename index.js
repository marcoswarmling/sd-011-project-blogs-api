const express = require('express');
const bodyParser = require('body-parser');
const userValidations = require('./validations/userValidate');
const userController = require('./controllers/userController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (req, res) => {
  res.send();
});

app.post(
  '/user',
  userValidations.validateEmail,
  userValidations.validateName,
  userValidations.validatePassword,
  userController.createUser,
);
