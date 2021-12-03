const router = require('express').Router();
const { login } = require('../controllers/loginControllers');
const {
  loginValidation,
} = require('../middlewares/loginMiddlewares');

router.post('/', loginValidation, login);

module.exports = router;