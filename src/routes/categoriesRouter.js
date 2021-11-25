const express = require('express');

const router = express.Router();

const {
  jwtAuthorization,
} = require('../middleware/userMiddleware');

const { categoriesAuthentication } = require('../middleware/categoriesMiddleware');

const cetegoriesController = require('../controller/cetegoriesController');

router.post('/', jwtAuthorization, categoriesAuthentication, cetegoriesController.createCategory);
router.get('/', jwtAuthorization, cetegoriesController.getAllCategories);

module.exports = router;