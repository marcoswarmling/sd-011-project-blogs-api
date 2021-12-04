const router = require('express').Router();
const userController = require('../controllers/Users');
const validationJoi = require('../validationJoi');
const validationJWT = require('../validationJwt');

router.post('/', validationJoi, userController.create);
router.get('/', validationJWT, userController.getAll);
router.get('/:id', validationJWT, userController.getById);

module.exports = router;