const { Router } = require('express');
const postController = require('../controllers/postController');
const { validapost } = require('../validations/postValidate');
const { validateCategoriesIds } = require('../validations/categoriesIdsValidate');
const validateToken = require('../auth/validateToken');

const router = Router();

router.get('/', validateToken, postController.getAllPost);

router.post('/', validateToken, validapost, validateCategoriesIds, postController.create);

module.exports = router;
