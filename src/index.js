require('dotenv').config();
const express = require('express');
const Routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

const ErrorsMiddleware = require('./middlewares/defaultError');

app.use(express.json());

app.use(Routes);
app.use(ErrorsMiddleware);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
