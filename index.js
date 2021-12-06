require('dotenv').config();
const express = require('express');
const userRoute = require('./src/routes/userRoute');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Routes
app.use('/user', userRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
