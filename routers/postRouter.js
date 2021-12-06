const { Router } = require('express');
const postController = require('../controllers/postController');
const middlewares = require('../middlewares/userValidations');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/', auth.tokenAuth,
  middlewares.postValidation,
  postController.create);

router.get('/', auth.tokenAuth,
  postController.getAll);

module.exports = router;
