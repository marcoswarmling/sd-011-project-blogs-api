const express = require('express');
const { userRoutes, categoryRoutes, postRoutes } = require('./routes');
const errorMilddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(errorMilddleware);