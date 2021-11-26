const express = require('express');
const userRoute = require('./routes/userRouter');
const categoryRoute = require('./routes/categoryRouter');
const postRoute = require('./routes/postRouter');

const app = express();

app.use(express.json());
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', postRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
