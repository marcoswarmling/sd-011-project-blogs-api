const express = require('express');
const userRoutes = require('./routes/userRoutes');
const userLogin = require('./routes/loginRoutes');
const categoryRoutes = require('./routes/routesCategory');
const postRoutes = require('./routes/postsRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.use('/login', userLogin);

app.use('/categories', categoryRoutes);

app.use('/post', postRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
