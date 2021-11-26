const postRoutes = require('express').Router();

const PostControllers = require('../controllers/PostControllers');

const validateToken = require('../middlewares/validateToken');

postRoutes.post('/', validateToken, PostControllers.create);
postRoutes.get('/', validateToken, PostControllers.index);
postRoutes.get('/:id', validateToken, PostControllers.getPostById);
postRoutes.put('/:id', validateToken, PostControllers.updatePost);

module.exports = postRoutes;
