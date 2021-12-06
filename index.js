const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./src/api/routes/routesUser');
const loginRoutes = require('./src/api/routes/routesLogin');
const categoriesRoutes = require('./src/api/routes/routesCategories');
const postRoutes = require('./src/api/routes/routesPost');

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!!!!!!`));
