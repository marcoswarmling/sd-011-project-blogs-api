const express = require('express');

const app = express();
app.use(express.json());

const { User } = require('./src/models');

app.post('/user', (req, res) => {
  User.create(req.body)
    .then((createdUser) => {
      console.log(createdUser);
      res.json({ token: 'tokenubauba' });
    });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
