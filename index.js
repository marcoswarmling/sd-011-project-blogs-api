const express = require('express');
require('dotenv').config(); 

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
const routerUser = require('./routes/userRoutes');
const routerLogin = require('./routes/loginRoutes');

app.use('/user', routerUser);
app.use('/login', routerLogin);
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
