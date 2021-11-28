const express = require('express');
require('dotenv').config();
const boryParser = require('body-parser');

const app = express();

app.use(boryParser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
