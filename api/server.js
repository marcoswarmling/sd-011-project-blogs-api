const app = require('./app');
require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT || 3000, () => console.log(`Online na porta ${PORT || 3000}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
