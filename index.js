const express = require('express');
require('dotenv').config();

const UserRoutes = require('./src/routes/userRoutes');
const LoginRoutes = require('./src/routes/loginRoutes');
const CategoryRoutes = require('./src/routes/categoryRoutes');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRoutes);
app.use('/login', LoginRoutes);
app.use('/categories', CategoryRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));