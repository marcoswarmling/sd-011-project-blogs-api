const router = require('express').Router();
const { create, getAll } = require('../controllers/categoryController');
const isValid = require('../validations/categoryValidations');
const { validateToken } = require('../validations/tokenValidations');

router.post('/', validateToken, isValid.category, create);
router.get('/', validateToken, getAll);

module.exports = router;