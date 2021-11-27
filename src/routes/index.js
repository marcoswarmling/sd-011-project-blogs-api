const router = require('express').Router();
const controllerUser = require('../controllers/user');
const controllerCategory = require('../controllers/category');
const controllerPost = require('../controllers/post');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');
const validatePost = require('../middlewares/validatePost');

router.post('/user', validateUser.verifyUserFields, controllerUser.createUser);
router.post('/login', validateUser.verifyLoginFields, controllerUser.loginUser);
router.post('/categories',
validateToken,
validateCategory.verifyFields,
controllerCategory.createCategories);
router.post('/post', validateToken, validatePost.verifyFields, controllerPost.createPost);
router.get('/user', validateToken, controllerUser.getAllUsers);
router.get('/user/:id', validateToken, controllerUser.getUserById);
router.get('/categories', validateToken, controllerCategory.getAllCategories);

module.exports = router;