const express = require('express');
const userController = require('../controllers/Users');
const { newUserValidations } = require('../middlewares');
const validationJWT = require('../auth/validationJWT');

const router = express.Router();

router.post('/', newUserValidations, userController.create);
router.get('/', validationJWT, userController.getAll);
router.get('/:id', validationJWT, userController.getById);

module.exports = router;
