const express = require('express');
const rescue = require('express-rescue');
const categoriesController = require('../controllers/categoriesController');
const { nameValidation } = require('../middlewares/categoriesValidation');
const { jwtValidation } = require('../auth/validateJWT');

const router = express.Router();

router
  .post(
    '/categories',
    rescue(nameValidation),
    rescue(jwtValidation),
    rescue(categoriesController.findOrCreate),
  )
  .get(
    '/categories',
    jwtValidation,
    rescue(categoriesController.getAllcategories),
  );

module.exports = router;
