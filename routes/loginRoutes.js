const router = require('express').Router();
const { createLogin } = require('../controllers/loginControllers');

const {
  validateLoginJoi,
  validateLoginData,
} = require('../middlewares/validateLogin');

router.post('/',
  validateLoginJoi,
  validateLoginData,
  createLogin);

module.exports = router; 