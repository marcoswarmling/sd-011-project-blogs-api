// const express = require('express');

// const app = express();

// app.listen(3000, () => console.log('ouvindo porta 3000!'));

// // não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (request, response) => {
//   response.send();
// });

const express = require('express');
const bodyParser = require('body-parser');

// const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.use('/user', userController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));