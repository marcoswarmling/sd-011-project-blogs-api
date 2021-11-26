const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userMiddleware = require('../middlewares/userMeddlewares');
const userMiddlewaresComplement = require('../middlewares/userMiddlewaresComplement');
const loginRoutes = require('../routes/loginRoutes');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(userMiddleware);
app.use(userMiddlewaresComplement);

app.use(loginRoutes);

module.exports = app;
