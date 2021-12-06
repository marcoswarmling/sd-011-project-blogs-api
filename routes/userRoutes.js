const express = require('express');
const controller = require('../controllers/userController');
const { validateUserWithToken } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/', validateUserWithToken, controller.getAllUsers);
router.get('/:id', validateUserWithToken, controller.getUser);
router.post('/', controller.addUser);
// router.get('/me', (req, res) => res.send('oi'));

module.exports = router;