const router = require('express').Router();

const { validateJWT } = require('../middlewares/validateJWT');
const { 
  getAllUsers, 
  getUser,
} = require('../controllers/users');

router.get('/user',
  validateJWT,
  getAllUsers);

router.get('/user/:id',
  validateJWT,
  getUser);

module.exports = router;
