const router = require('express').Router();
const { createUser, getAllUsers, getUserById } = require('../controllers/usersController');
const validateToken = require('../middlewares/validateToken');

router.post('/', createUser);
router.get('/', validateToken, getAllUsers);
router.get('/:id', validateToken, getUserById);

module.exports = router;