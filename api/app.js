const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userMiddleware = require('../middlewares/userMiddlewares');
const userMiddlewaresComplement = require('../middlewares/userMiddlewaresComplement');
const loginRoutes = require('../routes/loginRoutes');
const loginMiddleware = require('../middlewares/loginMiddlewares');
const categoryRoutes = require('../routes/categoryRoutes');
const middlewareCategory = require('../middlewares/categoryMiddleware');
const postRoutes = require('../routes/postRoutes');
const middlewarePost = require('../middlewares/postMiddleware');
const postMiddlewareComplement = require('../middlewares/postMiddlewareComplement');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(userMiddleware);
app.use(userMiddlewaresComplement);

app.use(loginRoutes);
app.use(loginMiddleware);

app.use(categoryRoutes);
app.use(middlewareCategory);

app.use(postRoutes);
app.use(middlewarePost);
app.use(postMiddlewareComplement);

module.exports = app;
