const { Router } = require('express');
const auth = require('../middlewares/auth');
const middlewares = require('../middlewares/userValidations');

const router = Router();

router.post('/', middlewares.passwordLoginValidation,
  middlewares.emailLoginValidation,
  auth.login);

module.exports = router;
