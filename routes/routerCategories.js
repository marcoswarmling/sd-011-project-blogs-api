const router = require('express').Router();
const { insertCategorie, getAllCategories } = require('../controller/controllerCategories');

const { cheNameCategories, checkToken, checkValidToken } = require('../middleware');

router.post('/', cheNameCategories, checkToken, checkValidToken, insertCategorie);

router.get('/', checkToken, checkValidToken, getAllCategories);

module.exports = router;
