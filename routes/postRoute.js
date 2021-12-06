const router = require('express').Router();
const isValid = require('../validations/postValidations');
const { validateToken } = require('../validations/tokenValidations');
const { create, getAll } = require('../controllers/postController');

const postValidations = [isValid.title, isValid.content, isValid.categoryIds];

router.post('/', validateToken, postValidations, create);
router.get('/', validateToken, getAll);

module.exports = router;