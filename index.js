const express = require('express');
require('dotenv').config();
const router = require('./routes/index');

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/user', router.userRoutes);
app.use('/login', router.loginRoutes);
app.use('/categories', router.categoriesRoutes);
/* app.use('/post', router.postRoutes); */

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
