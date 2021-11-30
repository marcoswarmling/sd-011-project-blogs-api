const router = require('express').Router();
const { validateJWT } = require('../middlewares/validateJWT');
const joiValidator = require('../middlewares/validator');
const { postCategorieSchema } = require('../middlewares/categories');
const { insertCategorie } = require('../controllers/categories');

router.post('/categories',
  validateJWT,
  joiValidator(postCategorieSchema),
  insertCategorie);

module.exports = router;
