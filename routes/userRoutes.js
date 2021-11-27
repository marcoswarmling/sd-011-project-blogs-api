const router = require('express').Router();

const { createUser } = require('../controllers/usersControllers');

const {
  validateUserJoi,
} = require('../middlewares/validateUsers');

router.post('/',
  validateUserJoi,
  createUser);

module.exports = router;