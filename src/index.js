require('dotenv').config();
const express = require('express');
const Routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(Routes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
