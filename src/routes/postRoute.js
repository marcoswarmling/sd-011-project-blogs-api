const postRoute = require('express').Router();
const postController = require('../controllers/postController.js');
const checkToken = require('../middlewares/checkToken.js');

postRoute.post('/', checkToken, postController.createPost);
postRoute.get('/', checkToken, postController.getAll);

module.exports = postRoute;