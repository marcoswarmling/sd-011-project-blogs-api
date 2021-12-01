const express = require('express');
const bodyParser = require('body-parser');
const userValidations = require('./validations/userValidate');
const userController = require('./controllers/userController');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (req, res) => {
  res.send();
});

app.post(
  '/user',
  userValidations.validateEmail,
  userValidations.validateName,
  userValidations.validatePassword,
  userValidations.checkEmailExists,
  userController.createUser,
);
