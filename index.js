const express = require('express');

const app = express();
app.use(express.json());

const { 
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  createCategory,
  getCategories,
 } = require('./controllers/indexController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => response.send());

// Rota teste
app.get('/ping', (_, res) => res.send('Pong'));

app.post('/user', createUser);
app.get('/user', getAllUsers);
app.get('/user/:id', getUserById);

app.post('/categories', createCategory);
app.get('/categories', getCategories);

app.post('/login', loginUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));