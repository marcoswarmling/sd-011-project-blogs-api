const router = require('express').Router();
const postControllers = require('../controllers/postControllers');
const {
  postsValidation,
  validateCategories,
} = require('../middlewares/postsMiddlewares');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, validateCategories, postsValidation, postControllers.newPost);
router.get('/', postControllers.getAll);

module.exports = router;