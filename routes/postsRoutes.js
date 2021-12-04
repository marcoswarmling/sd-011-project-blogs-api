const routes = require('express').Router();
const postcontroller = require('../controller/postController');
const tokenValid = require('../middlewares/tokenExists');
const validFields = require('../middlewares/postValidsFields');
const deleteController = require('../controller/postController');

routes.post('/',
tokenValid.tokenExists,
validFields.postValidsFields,
validFields.categoryIdExists,
postcontroller.postControllerInsert);

routes.delete('/:idPost',
tokenValid.tokenExists,
deleteController.controllerDeletePost);

module.exports = routes;