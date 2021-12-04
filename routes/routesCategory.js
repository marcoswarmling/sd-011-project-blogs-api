const routes = require('express').Router();
const categorie = require('../controller/categorieController');
const catNameValid = require('../middlewares/cantegorieNameValid');
const tokenValid = require('../middlewares/tokenExists');

routes.post('/',
tokenValid.tokenExists,
catNameValid.catNameValid,
categorie.controllerInsertCategorie);

routes.get('/', 
tokenValid.tokenExists,
categorie.controllerFindAll);

module.exports = routes;