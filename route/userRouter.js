const { Router } = require('express');
const userController = require('../controllers/userController');
const { validaUser } = require('../validations/userValidate');
const validateToken = require('../auth/validateToken');

const router = Router();

router.post('/', validaUser, userController.create);
router.get('/', validateToken, userController.getAllUser);
router.get('/:id', validateToken, userController.findById);

module.exports = router;
