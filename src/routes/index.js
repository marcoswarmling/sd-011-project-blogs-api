const express = require('express');

const Route = express.Router();

const userRoutes = require('./user');
const loginRoutes = require('./login');

Route.use('/user', userRoutes);
Route.use('/login', loginRoutes);

Route.get('/', (_request, response) => {
  response.send();
});

module.exports = Route;
