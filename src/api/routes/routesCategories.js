const router = require('express').Router();
const { validateSchema } = require('../../middlewares/validateSchema');
const { categorySchema } = require('../../schemas/categorySchema');
const { createCategory } = require('../../controllers/categoryController');

router.post('/', validateSchema(categorySchema), createCategory);

module.exports = router;