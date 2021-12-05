const router = require('express').Router();
const { createUser, getAllUsers } = require('../controllers/usersController');
const validateToken = require('../middlewares/validateToken');

router.post('/', createUser);
router.get('/', validateToken, getAllUsers);

module.exports = router;