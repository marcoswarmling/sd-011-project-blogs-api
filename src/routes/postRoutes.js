const postRoutes = require('express').Router();

const PostControllers = require('../controllers/PostControllers');

const validateToken = require('../middlewares/validateToken');

postRoutes.post('/', validateToken, PostControllers.create);

module.exports = postRoutes;
