const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const {
  userValidation,
} = require('../middlewares/userMiddlewares');

router.post('/', userValidation, userControllers.create);

module.exports = router;