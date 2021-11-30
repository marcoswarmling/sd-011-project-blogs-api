const express = require('express');

const Route = express.Router();

const userRoutes = require('./user');
const loginRoutes = require('./login');
const categoriesRoutes = require('./categories');
const blogPostsRoutes = require('./blogPosts');

Route.use('/user', userRoutes);
Route.use('/login', loginRoutes);
Route.use('/categories', categoriesRoutes);
Route.use('/post', blogPostsRoutes);

Route.get('/', (_request, response) => {
  response.send();
});

module.exports = Route;
