require('dotenv').config();
const express = require('express');
const UserRoutes = require('./routes/userRoutes');
const LoginRoutes = require('./routes/loginRoutes');
const ErrorMiddleware = require('./middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', UserRoutes);
app.use('/login', LoginRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(ErrorMiddleware);

app.listen(PORT, () => console.log(`Listening on the PORT: ${PORT}`));

module.exports = app;
