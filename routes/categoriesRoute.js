const router = require('express').Router();
const controllerCreateCategories = require('../controller/controllerCreateCategories');
const { validedToken, validedCategoryName } = require('../middleware');

router.post(
  '/',
  validedCategoryName,
  validedToken,
  controllerCreateCategories,
);

module.exports = router;
