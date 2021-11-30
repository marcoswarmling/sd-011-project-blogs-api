const express = require('express');

const app = express();

app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const categoriesRoutes = require('./src/routes/categoriesRoutes');
const postsRoutes = require('./src/routes/postRoutes');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postsRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
