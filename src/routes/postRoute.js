const postRoute = require('express').Router();
const postController = require('../controllers/postController.js');
const checkToken = require('../middlewares/checkToken.js');
const checkPostOwner = require('../middlewares/checkPostOwner.js');

postRoute.post('/', checkToken, postController.createPost);
postRoute.get('/search', checkToken, postController.getByTerm);
postRoute.get('/', checkToken, postController.getAll);
postRoute.get('/:id', checkToken, postController.getById);
postRoute.put('/:id', checkToken, checkPostOwner, postController.updateById);
postRoute.delete('/:id', checkToken, checkPostOwner, postController.deleteById);

module.exports = postRoute;