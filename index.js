const express = require('express');
const jwt = require('jsonwebtoken');

const { User } = require('./models');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const validateEmail = (email, res) => {
  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
};

const validatePassword = (pass, res) => {
  if (!pass) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }

  if (pass.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
};

app.post('/user', async (req, res) => {
  const secret = 'meusegredo';

  const { displayName, email, password, image } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  validateEmail(email, res);
  validatePassword(password, res);

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(400).json({ message: 'User already registered' });
  }

  await User.create(req.body);

  const token = jwt.sign(email, secret);

  res.json(token);
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
