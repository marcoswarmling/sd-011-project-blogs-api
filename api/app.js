const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userMiddleware = require('../middlewares/userMiddlewares');
const userMiddlewaresComplement = require('../middlewares/userMiddlewaresComplement');
const loginRoutes = require('../routes/loginRoutes');
const loginMiddleware = require('../middlewares/loginMiddlewares');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(userMiddleware);
app.use(userMiddlewaresComplement);

app.use(loginRoutes);
app.use(loginMiddleware);

module.exports = app;