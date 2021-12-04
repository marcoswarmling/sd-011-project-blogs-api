const router = require('express').Router();
const { create, getAll } = require('../controllers/userController');
const isValid = require('../validations/userValidations');

router.post('/', isValid.name, isValid.email, isValid.emailUnique, isValid.password, create);
router.get('/', getAll);

module.exports = router;