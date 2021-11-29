const express = require('express');

const Route = express.Router();

const userRoutes = require('./user');

Route.use('/user', userRoutes);

Route.get('/', (_request, response) => {
  response.send();
});

module.exports = Route;
