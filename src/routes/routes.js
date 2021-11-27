const router = require('express').Router();
const controllerUser = require('../controllers/controllerUser');
const controllerCategories = require('../controllers/controllerCategories');
const middlewaresUser = require('../middlewares/middlewaresUser');
const middlewaresCategories = require('../middlewares/middlewaresCategories');
const controllerPosts = require('../controllers/controllerPosts');
const middlewaresPosts = require('../middlewares/middlewaresPosts');
const { token } = require('../middlewares/token');

// users
router.post('/user', middlewaresUser.verifyUserFields, controllerUser.createUser);
router.get('/user', token, controllerUser.allUsers);
router.get('/user/:id', token, controllerUser.getById);
router.post('/login', middlewaresUser.verifyLoginFields, controllerUser.loginUser);

// categories
router.post('/categories',
  token,
  middlewaresCategories.verifyFields,
  controllerCategories.createCategories);
router.get('/categories',
  token,
  controllerCategories.allCategories);

// post
router.post('/post',
  token,
  middlewaresPosts.verifyFields,
  controllerPosts.createPost);

router.get('/post',
  token,
  controllerPosts.allPosts);

router.get('/post/:id',
  token,
  controllerPosts.findById);

router.put('/post/:id',
  token,
  middlewaresPosts.verifyEditFields,
  middlewaresPosts.findPostById,
  controllerPosts.updateById);

module.exports = router;
