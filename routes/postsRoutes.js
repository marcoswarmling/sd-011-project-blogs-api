const routes = require('express').Router();
const postcontroller = require('../controller/postController');
const tokenValid = require('../middlewares/tokenExists');
const validFields = require('../middlewares/postValidsFields');

routes.post('/',
tokenValid.tokenExists,
validFields.postValidsFields,
validFields.categoryIdExists,
postcontroller.postControllerInsert);

module.exports = routes;