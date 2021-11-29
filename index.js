const express = require('express');
const BodyParser = require('body-parser');

const app = express();
app.use(BodyParser.json());

const UserRouter = require('./routes/UserRouter');
const CategoriesRouter = require('./routes/CategoryRoutes');
const BlogPostRouter = require('./routes/BlogPostRouter');

app.use('/', UserRouter);
app.use('/', CategoriesRouter);
app.use('/', BlogPostRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
