const router = require('express').Router();
const controllerCreateCategories = require('../controller/controllerCreateCategories');
const controllerGetAllCategories = require('../controller/controllerGetAllCategories');
const { validedToken, validedCategoryName } = require('../middleware');

router.post(
  '/',
  validedCategoryName,
  validedToken,
  controllerCreateCategories,
);

router.get('/', validedToken, controllerGetAllCategories);

module.exports = router;
