const router = require('express').Router();
const { 
  categoryNameValidator,
} = require('../middlewares/categoryValidation');

const {
  createCategory,
} = require('../controllers/categoryController');

const { 
  validateTokenExistence,
  validateToken,
} = require('../middlewares/auth/tokenValidation');

router.post(
  '/categories',
  validateTokenExistence,
  validateToken,
  categoryNameValidator,
  createCategory,
);

// router.get(
//   '/categories',
//   validateTokenExistence,
//   validateToken,
//   getAll,
// );

module.exports = router;