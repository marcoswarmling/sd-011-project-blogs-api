const postRoutes = require('express').Router();

const PostControllers = require('../controllers/PostControllers');

const validateToken = require('../middlewares/validateToken');

postRoutes.post('/', validateToken, PostControllers.create);
postRoutes.get('/', validateToken, PostControllers.index);
postRoutes.get('/search', validateToken, PostControllers.getPostBySearchTerm);
postRoutes.get('/:id', validateToken, PostControllers.getPostById);
postRoutes.put('/:id', validateToken, PostControllers.updatePost);
postRoutes.delete('/:id', validateToken, PostControllers.deletePost);

module.exports = postRoutes;
