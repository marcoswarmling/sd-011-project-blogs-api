const router = require('express').Router();
const { validateSchema } = require('../../middlewares/validateSchema');
const { categorySchema } = require('../../schemas/categorySchema');
const { createCategory, getAll } = require('../../controllers/categoryController');

router.get('/', getAll);
router.post('/', validateSchema(categorySchema), createCategory);

module.exports = router;