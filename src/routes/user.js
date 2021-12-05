const router = require('express').Router();
const { usersController } = require('../controllers');
const { validateJWT } = require('../middlewares');

router.post('/', usersController.createUser);
router.get('/:id', validateJWT, usersController.getByUserId);
router.get('/', validateJWT, usersController.getAllUsers);

module.exports = router;
