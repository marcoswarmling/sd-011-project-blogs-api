const router = require('express').Router();
const categoriesController = require('../controller/categoriesController');

router.post('/categories', categoriesController.create);

module.exports = router;