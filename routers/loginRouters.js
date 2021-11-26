const router = require('express').Router();

const {
  validateLogin,
} = require('../middlewares/loginValidations');

const {
  createLogin,
} = require('../controllers/loginControllers');

router.post('/', validateLogin, createLogin);

module.exports = router;
