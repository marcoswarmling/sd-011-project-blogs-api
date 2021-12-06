const router = require('express').Router();
const { create, getAll, getById } = require('../controllers/userController');
const isValid = require('../validations/userValidations');
const { validateToken } = require('../validations/tokenValidations');

router.post('/', isValid.name, isValid.email, isValid.password, create);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);

module.exports = router;