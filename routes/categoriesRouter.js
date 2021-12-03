const express = require('express');
const rescue = require('express-rescue');
const categoriesController = require('../controllers/categoriesController');
const { nameValidation } = require('../middlewares/categoriesValidation');
const { jwtValidation } = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/categories',
  rescue(nameValidation),
  rescue(jwtValidation),
  rescue(categoriesController.findOrCreate),
)
.get('/cagetories', jwtValidation, rescue(categoriesController.getAllcategories));
// .post('/login', rescue(loginValidation), rescue(userController.findOne))
// .get('/user/:id', jwtValidation, rescue(userController.getUser))

module.exports = router;
