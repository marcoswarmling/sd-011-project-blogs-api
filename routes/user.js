const router = require('express').Router();

const { validateJWT } = require('../middlewares/validateJWT');
const { getAllUsers } = require('../controllers/users');

router.get('/user',
  validateJWT,
  getAllUsers);

module.exports = router;
