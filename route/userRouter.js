const { Router } = require('express');
const userController = require('../controllers/userController');
const { validaUser } = require('../validations/userValidate');

const router = Router();

router.post('/', validaUser, userController.create);

module.exports = router;
