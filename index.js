const express = require('express');
const userRoutes = require('./Router/userRoutes');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
