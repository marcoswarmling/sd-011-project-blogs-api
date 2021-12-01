const postRoute = require('express').Router();
const postController = require('../controllers/postController.js');
const checkToken = require('../middlewares/checkToken.js');

postRoute.post('/', checkToken, postController.createPost);
postRoute.get('/', checkToken, postController.getAll);
postRoute.get('/:id', checkToken, postController.getById);

module.exports = postRoute;