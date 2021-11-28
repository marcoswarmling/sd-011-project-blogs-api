const express = require('express');
const user = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(express.json());
router.get('/', auth, user.getAll);
router.post('/', user.createUser);
router.get('/:id', auth, user.getUserById);
router.delete('/me', auth, user.deleteOwnUser);

module.exports = router;
