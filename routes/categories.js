const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const joiValidator = require('../middlewares/validator');
const { postCategorieSchema } = require('../middlewares/categories');
const { insertCategorie, getCategories } = require('../controllers/categories');

router.post('/categories',
  validateJWT,
  joiValidator(postCategorieSchema),
  insertCategorie);

router.get('/categories', 
  validateJWT,
  getCategories);

module.exports = router;
