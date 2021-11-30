require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3000;

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
